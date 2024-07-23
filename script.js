document.getElementById('imageUpload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById('profile-img');
        img.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});
