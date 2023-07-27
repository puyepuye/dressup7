$(document).ready(function() {

    function selectFirstItem() {
        $(".carousel-item:first-child").click();
    }
    
      // Automatically select the first item in carousel 1 on window load
      $(window).on("load", selectFirstItem);
    
  
    // Event listener for self button
    $(".whiteButton:first").on("click", function() {
      updateCarousel1("self");
      console.log("self");
    });
  
    // Event listener for gear button
    $(".whiteButton:last").on("click", function() {
      updateCarousel1("gear");
      console.log("gear");
    });
  
    // Dictionary to map carousel 1 items based on type
    var carousel1Data = {
      self: ["eyes", "nose", "ears", "mouth"],
      gear: ["clothes", "shoes"]
    };
  
   // Function to update carousel 1 based on the type (self or gear)
    function updateCarousel1(type) {
        // Clear previous items
        $("#carousel1").empty();
    
        // Get carousel 1 items based on the type from the dictionary
        var carousel1Items = carousel1Data[type] || [];
    
        // Add items to carousel 1
        for (var i = 0; i < carousel1Items.length; i++) {
            var item = carousel1Items[i];
            var carouselItem = $("<div class='carousel-item'></div>");
            var image = $("<img>").attr("src", "/assets/icons/" + type + "/" + item +"/"+item+"1"+ ".png");
            carouselItem.append(image);
            $("#carousel1").append(carouselItem);
        }

        $(".carousel-item:first").addClass("selected");
        // Automatically select the first item of carousel 1 for gear option
        if (type === "gear"){
            $(".carousel-item:first-child").click();
        }

    }

     // Automatically select self and the first item of carousel 1 on window load
     updateCarousel1("self");
  
     var carousel2DataNum = {
        "/assets/icons/self/eyes/eyes1.png": 5,
        "/assets/icons/self/nose/nose1.png": 3,
        "/assets/icons/self/ears/ears1.png": 3,
        "/assets/icons/self/mouth/mouth1.png": 4,
        "/assets/icons/gear/clothes/clothes1.png":3
      };
      
      function updateCarousel2(selectedItem) {
        // Clear previous items
        $("#carousel2").empty();
      
        // Get the number of items for the selected item from carousel2DataNum
        var numItems = carousel2DataNum[selectedItem] || 0;
      
        // Add items to carousel2
        for (var i = 1; i <= numItems; i++) {
          var item = selectedItem.replace("1.png", i + ".png");
          var carouselItem = $("<div class='carousel-item'></div>");
          var image = $("<img>").attr("src", item);
          carouselItem.append(image);
          $("#carousel2").append(carouselItem);
        }
      
      }
      
      // Example usage
      //updateCarousel2("nose1.png");
      
      
      // Add event listener to Carousel 1 items
      $("#carousel1").on("click", ".carousel-item", function() {
        var selectedItem = $(this).find("img").attr("src");
        console.log(selectedItem);
        updateCarousel2(selectedItem);
      });

      //UPDATE AVATAR
      function updateAvatar(selectedItem) {
        var imageToUpdate = $(".avatar-display .avatar-image");
        var altToUpdate = "";
        
        if (selectedItem.includes("/eyes/")) {
          altToUpdate = "eyes";
        } else if (selectedItem.includes("/ears/")) {
          altToUpdate = "ears";
        } else if (selectedItem.includes("/nose/")) {
          altToUpdate = "nose";
        } else if (selectedItem.includes("/mouth/")) {
          altToUpdate = "mouth";
        }
          else if (selectedItem.includes("/clothes/")) {
          altToUpdate = "clothes";
        }
        
        imageToUpdate.each(function() {
          var currentAlt = $(this).attr("alt");
          if (currentAlt === altToUpdate) {
            $(this).attr("src", selectedItem);
          }
        });

        // Store the selected avatar details in local storage
        localStorage.setItem("avatarDetails", JSON.stringify({ selectedItem, altToUpdate }));
      }
      
      
      // Add event listener to Carousel 2 items
      $("#carousel2").on("click", ".carousel-item", function() {
        var selectedItem = $(this).find("img").attr("src");
        console.log("avatar console log");
        console.log(selectedItem);
        var updatedString = selectedItem.replace("/assets/icons/", "/assets/");
        console.log(updatedString)
        updateAvatar(updatedString);
      });

      $('.finishButton').click(function() {
        redirectToResultPage();
      });
     
    
  });

  /*RESULT PAGE JAVAJAVAJAVA*/
  function redirectToResultPage() {
    // Get the selected items
    var eyes = $('#eyes-image').attr('src');
    var ears = $('#ears-image').attr('src');
    var nose = $('#nose-image').attr('src');
    var mouth = $('#mouth-image').attr('src');
  
    // Construct the URL with query parameters
    var url = 'result.html';
    url += '?eyes=' + encodeURIComponent(eyes);
    url += '&ears=' + encodeURIComponent(ears);
    url += '&nose=' + encodeURIComponent(nose);
    url += '&mouth=' + encodeURIComponent(mouth);
  
    // Redirect to the result page
    window.location.href = url;
  }

 // Add .carousel2-bounce-enter class to the container element of carousel 2
$("#carousel2").addClass("carousel2-bounce-enter");
