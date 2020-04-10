//上拉加载更多
    //创建MeScroll对象
    var mescroll = new MeScroll("loading-content", {
      down: {
        use:false
      },
      up: {
        auto: true, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
        isBounce: true, //此处禁止ios回弹
        callback: upCallback, //上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
        page: {
          num:0,
          size: 5, //每页数据的数量
        },
        offset:0,
      },
      htmlLoading: '<p class="upwarp-tip">加载中..</p>',
      htmlNodata: '<p class="upwarp-nodata">没有更多啦~</p>', //无数据的布局
    });
    
    /*上拉加载的回调 page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    function upCallback(page){
      //联网加载数据
      getListDataFromNet(page.num, page.size, function(curPageData){
        //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
        //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
        //console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length);
        mescroll.endSuccess(curPageData.length);
        
        //设置列表数据
        setListData(curPageData, true);
      }, function(){
        //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
        mescroll.endErr();
      });
    }
    /*设置列表数据*/
    function setListData(curPageData, isAppend) {
      var listDom=document.getElementById("item-content");
      for (var i = 0; i < curPageData.length; i++) {
        var newObj=curPageData[i];

        var str='<div class="course-item">';
            str+='<a href="">'
            str+='<h3 class="course-name"><p class="course-label"><span class="reduction-label">减</span><span class="discount-label">折</span><span class="audition-label">听</span></p><p class="course-title">【协议】考研<span>英语</span>一高端辅导成功学</p></h3>';
            str+='<div class="course-contain-info"><p><span>有效期：2019.12.01</span><span>288课时</span></p><p><span>188人学习</span></p></div>'
            str+='<div class="course-extra-info">'
            str+='<div class="course-lecturer"><p class="teacher-item"><img src="images/_temp/teacher.png" alt=""><span>文都名师</span></p></div>'
            str+='<div class="course-price"><del class="cour-original-price">￥2867</del><p class="discount-price">￥21867</p></div>'  
            str+='</div></a></div>' 
            
        var courseItem=document.createElement("div");
        courseItem.className="list-course-item"
        courseItem.innerHTML=str;
        
        if (isAppend) {
          listDom.appendChild(courseItem);//加在列表的后面,上拉加载
        } else{
          listDom.insertBefore(courseItem, listDom.firstChild);//加在列表的前面,下拉刷新
        }
      }
    }
    /*联网加载列表数据
     在您的实际项目中,请参考官方写法: http://www.mescroll.com/api.html#tagUpCallback
     请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
     实际项目以您服务器接口返回的数据为准,无需本地处理分页.
     * */
    var downIndex=0;
    function getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
      //延时一秒,模拟联网
              setTimeout(function () {
                try{
                  var newArr=[];
                  if(pageNum==0){
                    //此处模拟下拉刷新返回的数据
                    downIndex++;
                    var newObj={title:"【新增新闻"+downIndex+"】 新增新闻的标题", content:"新增新闻的内容"};
                    newArr.push(newObj);
                  }else{
                    //此处模拟上拉加载返回的数据
                    for (var i = 0; i < pageSize; i++) {
                      var upIndex=(pageNum-1)*pageSize+i+1;
                      var newObj={title:"【新闻"+upIndex+"】 标题标题标题标题标题标题", content:"内容内容内容内容内容内容内容内容内容内容"};
                      newArr.push(newObj);
                    }
                  }
                  //联网成功的回调
                  successCallback&&successCallback(newArr);
                }catch(e){
                  //联网失败的回调
                  errorCallback&&errorCallback();
                }
              },1000)
    }