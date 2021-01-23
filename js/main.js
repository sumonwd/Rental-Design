

$('.form-input-content input, .form-input-content textarea').focus(function () {
    $(this).parents('.form-group').addClass('focused');
});

$('.form-input-content input, .form-input-content textarea').blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');
    } else {
        $(this).addClass('filled');
    }
});
$('.file_upload').each(function (file) {
    $(this).on('change', function (e) {
        var labelVal = $(this).prev(".file_title").text();
        var oldfileName = $(this).val();
        fileName = e.target.value.split('\\').pop();
        if (oldfileName == fileName) { return false; }
        var extension = fileName.split('.').pop();

        if (fileName) {
            if (fileName.length > 10) {
                $(this).prev(".file_title").text(fileName.slice(0, 8) + '...' + extension);
            }
            else {
                $(this).prev(".file_title").text(fileName);
            }
        }
        else {
            $(this).prev(".file_title").text(labelVal);
        }
    })
})
// $("#FileInput").on('change', function (e) {
//     var labelVal = $(".title").text();
//     var oldfileName = $(this).val();
//     fileName = e.target.value.split('\\').pop();

//     if (oldfileName == fileName) { return false; }
//     var extension = fileName.split('.').pop();

//     if ($.inArray(extension, ['jpg', 'jpeg', 'png']) >= 0) {
//         $(".filelabel i").removeClass().addClass('fa fa-file-image-o');
//         $(".filelabel i, .filelabel .title").css({ 'color': '#208440' });
//         $(".filelabel").css({ 'border': ' 2px solid #208440' });
//     }
//     else if (extension == 'pdf') {
//         $(".filelabel i").removeClass().addClass('fa fa-file-pdf-o');
//         $(".filelabel i, .filelabel .title").css({ 'color': 'red' });
//         $(".filelabel").css({ 'border': ' 2px solid red' });

//     }
//     else if (extension == 'doc' || extension == 'docx') {
//         $(".filelabel i").removeClass().addClass('fa fa-file-word-o');
//         $(".filelabel i, .filelabel .title").css({ 'color': '#2388df' });
//         $(".filelabel").css({ 'border': ' 2px solid #2388df' });
//     }
//     else {
//         $(".filelabel i").removeClass().addClass('fa fa-file-o');
//         $(".filelabel i, .filelabel .title").css({ 'color': 'black' });
//         $(".filelabel").css({ 'border': ' 2px solid black' });
//     }

//     if (fileName) {
//         if (fileName.length > 10) {
//             $(".filelabel .title").text(fileName.slice(0, 4) + '...' + extension);
//         }
//         else {
//             $(".filelabel .title").text(fileName);
//         }
//     }
//     else {
//         $(".filelabel .title").text(labelVal);
//     }
// });





var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    today = new Date(),
    // default targetDate is christmas
    targetDate = new Date(today.getFullYear(), 11, 25);

setDate(targetDate);
setYears(100) // set the next five years in dropdown

$("#select-month").change(function () {
    var monthIndex = $("#select-month").val();
    setDays(monthIndex);
});

function setDate(date) {
    setDays(date.getMonth());
    $("#select-day").val(date.getDate());
    $("#select-month").val(date.getMonth());
    $("#select-year").val(date.getFullYear());
}

// make sure the number of days correspond with the selected month
function setDays(monthIndex) {
    var optionCount = $('#select-day option').length,
        daysCount = daysInMonth[monthIndex];

    if (optionCount < daysCount) {
        for (var i = optionCount; i < daysCount; i++) {
            $('#select-day')
                .append($("<option></option>")
                    .attr("value", i + 1)
                    .text(i + 1));
        }
    }
    else {
        for (var i = daysCount; i < optionCount; i++) {
            var optionItem = '#select-day option[value=' + (i + 1) + ']';
            $(optionItem).remove();
        }
    }
}

function setYears(val) {
    var year = today.getFullYear();
    for (var i = 0; i < val; i++) {
        $('#select-year')
            .append($("<option></option>")
                .attr("value", year - i)
                .text(year - i));
    }
}
