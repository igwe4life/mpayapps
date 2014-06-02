        var localStorageKey = "demoStorageKey";
        $('#storageDemoPage').live('pagecreate', function() {
            if (Modernizr.localstorage) {
                showStoreValue();
            }
            else {
                $('#message').text("Unfortunately your browser doesn't support local storage");
                $('#addToStorage').attr('disabled', 'disabled');
                $('#message').show();
            }
            $('#addToStorage').click(function(e) {
                localStorage.setItem(1, $('#fname').val());
                localStorage.setItem(2, $('#lname').val());
                localStorage.setItem(3, $('#email').val());
                localStorage.setItem(4, $('#phone').val());
                localStorage.setItem(5, $('#address').val());
                showStoreValue();
                e.preventDefault();
            });
        });

        function showStoreValue() {
            var item = localStorage.getItem(1);
            if (item == null) {
                item = 'Nothing in store';
            }
            else if (item.length === 0) {
                item = 'Store contains empty value';
            }
            $('.fname').text(localStorage.getItem(1));
            $('.lname').text(localStorage.getItem(2));
            $('.email').text(localStorage.getItem(3));
            $('.phone').text(localStorage.getItem(4));
            $('.address').text(localStorage.getItem(5));
        }