var modalIndex = 0;
    var modalImages = [];
    var thumbnailsContainer = document.querySelector('.thumbnails');
  
    function openModal(images) {
      modalImages = images;
      modalIndex = 0;
      showImage();
      document.getElementById('myModal').style.display = "block";
      displayThumbnails();
    }
  
    function closeModal() {
      document.getElementById('myModal').style.display = "none";
    }
  
    function plusSlides(n) {
      modalIndex += n;
      if (modalIndex >= modalImages.length) {
        modalIndex = 0;
      } else if (modalIndex < 0) {
        modalIndex = modalImages.length - 1;
      }
      showImage();
    }
  
    function showImage() {
      var modalImg = document.getElementById("modalImg");
      modalImg.src = modalImages[modalIndex];
    }
  
    // Function to display thumbnails
    function displayThumbnails() {
      thumbnailsContainer.innerHTML = '';
      modalImages.forEach(function(imageSrc, index) {
        var thumbnail = document.createElement('img');
        thumbnail.src = imageSrc;
        thumbnail.alt = 'Thumbnail ' + (index + 1);
        thumbnail.classList.add('thumbnail');
        thumbnail.onclick = function() {
          modalIndex = index;
          showImage();
        };
        thumbnailsContainer.appendChild(thumbnail);
      });
    }