/**
 * Created by Xiaoli on 4/26/14.
 */

//define load handler
var handler = null,
    //page = 1,
    isLoading = false,
    finishLoad = false;

// Prepare layout options.


$(document).bind('scroll', onScroll);

/**
* When scrolled all the way to the bottom, add more tiles.
*/
function onScroll(event) {
  // Only check when we're not still waiting for data.
  if(!isLoading && !finishLoad) {
    // Check if we're within 100 pixels of the bottom edge of the broser window.
    var closeToBottom = ($(window).scrollTop() + $(window).height() > $(document).height() - 100);
    if(closeToBottom) {
      loadData();
    }
  }
};

/**
* Refreshes the layout.
*/
function applyLayout() {
	options.container.imagesLoaded(function() {
		// Create a new layout handler when images have loaded.
		handler = $('#tiles li');
		handler.wookmark(options);
	});
};

/**
* Loads data from the API.
*/
function loadData() {
  isLoading = true;

  console.log("in loadData");
  console.log("url:"+photo_list_url);

  $.ajax({
    type: 'GET',
    url: photo_list_url, // Page parameter to make sure we load new data
    dataType: 'json',
    success: onLoadData, //pass get data to onLoadData function
    error: function(jqXHR, textStatus, errorThrown){
            alert(jqXHR.responseText);
        }
  });
};

/**
* Receives data from the API, creates HTML for images and updates the layout
*/
function onLoadData(data) {

  isLoading = false;

  console.log("data.count:" + data.count);

  if(data.count != 0){

    $.each(data.results, function(i, item) {
      var html = '';
      html += '<li>';
      html += '<div class="item"><a href='+ photo_page_url+item.id+ '><img src="'+ item.file +'"></a></div>';
      //html += '<p><a href='+ photo_page_url+item.id+ '> Title: '+item.title+'</a></p>';

     // html += '<p><a href='+ user_url+item.author+ '> Author: '+item.authorName+'</p>';
      /*if (item.portrait) {
        html+='<img id="categories" src="/static/images/portrait_yellow.png"/>';
      }
      if (item.landscape) {
        html+='<img id="categories" src="/static/images/landscape_yellow.png"/>'; 
      }
      if (item.telephoto) {
        html+='<img id="categories" src="/static/images/telephoto_yellow.png"/>'; 
      }
      if (item.low_light) {
        html+='<img id="categories" src="/static/images/lowlight_yellow.png"/>'; 
      }
      if (item.high_speed) {
        html+='<img id="categories" src="/static/images/highspeed_yellow.png"/>'; 
      }
      if (item.long_exposure) {
        html+='<img id="categories" src="/static/images/longexposure_yellow.png"/>'; 
      }*/

      html += '</li>';

      console.log("html:" + html);

      // Add image HTML to the page.
      $("#user_tiles").append(html);

      //Apply layout.
      applyLayout();
    });

    if(data.next){
      photo_list_url = data.next;
      //page++; // Increment page index for future calls.
    }else{
      finishLoad = true;
      //$('#loadMore a').off('click');
      $('#loadMore').html('End of photo list')
    }

  } else {
    console.log("in else");
    finishLoad = true;
    $('#loadMore').html('No photos')
  }
    
};

function clearPhotos(){
    $('#tiles').empty()
};
