

$(document).ready(function () {
    $('#area').change(() => {
        // $('#ans').html($('#area'));

        let imgSrc = '';
        switch ($('#area').val()) {
            // case '':
            // break;
            case 'tb':
                storename = '板前店';
                imgSrc = './img/store1.jpg';
                phone = '電話：(06)234-567';
                phone = '電話：(06)234-567';
                contry = '地址：台北市小錢路三段634號'
                $('#st').text(storename);
                $('#te').text(phone);
                $('#co').text(contry);
                $('#map').attr('src', './img/store1.jpg');
                $('#map').css('width', '250px').css('height', '150px');
                break;
            case 'sb':
                storename = '華南店';
                imgSrc = './img/store2.jpg';
                phone = '電話：(06)234-567';
                phone = '電話：(06)234-567';
                contry = '地址：新北市小錢路三段634號'
                $('#st').text(storename);
                $('#te').text(phone);
                $('#co').text(contry);
                $('#map').attr('src', './img/store2.jpg');
                $('#map').css('width', '250px').css('height', '150px');
                break;
            case 'cl':
                storename = '運可店';
                imgSrc = './img/store3.jpg';
                phone = '電話：(06)234-567';
                phone = '電話：(06)234-567';
                contry = '地址：基隆市小錢路三段634號'
                $('#st').text(storename);
                $('#te').text(phone);
                $('#co').text(contry);
                $('#map').attr('src', './img/store3.jpg');
                $('#map').css('width', '250px').css('height', '150px');
                break;
            case 'il':
                storename = '來數店';
                imgSrc = './img/store4.jpg';
                phone = '電話：(06)234-567';
                phone = '電話：(06)234-567';
                contry = '地址：宜蘭市小錢路三段634號'
                $('#st').text(storename);
                $('#te').text(phone);
                $('#co').text(contry);
                $('#map').attr('src', './img/store4.jpg');
                $('#map').css('width', '250px').css('height', '150px');
                break;
            case 'tc':
                storename = '黃膚店';
                imgSrc = './img/store1.jpg';
                phone = '電話：(06)234-567';
                phone = '電話：(06)234-567';
                contry = '地址：台中市小錢路三段634號'
                $('#st').text(storename);
                $('#te').text(phone);
                $('#co').text(contry);
                $('#map').attr('src', './img/store1.jpg');
                $('#map').css('width', '250px').css('height', '150px');
                break;
            case 'hl':
                storename = '小松店';
                imgSrc = './img/store2.jpg';
                phone = '電話：(06)234-567';
                phone = '電話：(06)234-567';
                contry = '地址：花蓮市小錢路三段634號'
                $('#st').text(storename);
                $('#te').text(phone);
                $('#co').text(contry);
                $('#map').attr('src', './img/store2.jpg');
                $('#map').css('width', '250px').css('height', '150px');
                break;
            case 'ks':
                storename = '甮和店';
                imgSrc = './img/store3.jpg';
                phone = '電話：(06)234-567';
                phone = '電話：(06)234-567';
                contry = '地址：高雄市小錢路三段634號'
                $('#st').text(storename);
                $('#te').text(phone);
                $('#co').text(contry);
                $('#map').attr('src', './img/store3.jpg');
                $('#map').css('width', '250px').css('height', '150px');
                break;
            case 'ci':
                storename = '嘉南店';
                imgSrc = './img/store4.jpg';
                phone = '電話：(06)234-567';
                phone = '電話：(06)234-567';
                contry = '地址：嘉義市小錢路三段634號'
                $('#st').text(storename);
                $('#te').text(phone);
                $('#co').text(contry);
                $('#map').attr('src', './img/store4.jpg');
                $('#map').css('width', '250px').css('height', '150px');
                break;
            case 'tn':
                storename = '龍水店';
                imgSrc = './img/store1.jpg';
                phone = '電話：(06)234-567';
                phone = '電話：(06)234-567';
                contry = '地址：台南市小錢路三段634號'
                $('#st').text(storename);
                $('#te').text(phone);
                $('#co').text(contry);
                $('#map').attr('src', './img/store1.jpg');
                $('#map').css('width', '250px').css('height', '150px');
                break;
            case 'ch':
                storename = '小洞店';
                imgSrc = './img/store2.jpg';
                phone = '電話：(06)234-567';
                phone = '電話：(06)234-567';
                contry = '地址：彰化市小錢路三段634號'
                $('#st').text(storename);
                $('#te').text(phone);
                $('#co').text(contry);
                $('#map').attr('src', './img/store2.jpg');
                $('#map').css('width', '250px').css('height', '150px');
                break;
            case 'no':
                clearInterval();
                break;


        }
    });


})

$(function () {
    $('#ans').change(function () {
        var a = $(this).attr('id').substr(2);
        $('#ans').attr("src", "/img")
    })
})


