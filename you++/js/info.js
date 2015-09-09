$(document).ready(function() {

    $('.selectpicker').selectpicker();

    $('#step2-submit').click(function(event) {
        var name = $('#name').val();
        var sex = $('input[name="sex"]:checked').val();
        var phone = $('#phone').val();
        var verifycode = $('#verifycode').val();
        var identity = $('#identity').val();
        var email = $('#email').val();
        var step2 = $(this).parent('div');
        var type = $(step2).attr('id');
        var is_licence_agreed = $('input#licence').get(0).checked;

        if (!is_licence_agreed) {
            alert("请同意条款");
            return;
        }
        $.ajax({
                url: 'http://139.196.29.70/test/teacher/ifVerifyCodeRight.php',
                type: 'post',
                data: {
                    telephone: $('#phone').val(),
                    type: 1,
                    verifyCode: $('#verifycode').val()
                },
            })
            .done(function(data) {
                // alert(data);
            });

        var teach_age = $('#teach-age').val();
        var highest_education = $('#highest-education').val();
        if ("step2-type1" == type) {
            var school_name = $('#school-name').val();
            var school_type = $('#school-type').val();
            var teacher_title = $('#teacher-title').val();
            var graduate_school = $('#graduate-school').val();
            var graduate_major = $('#graduate-major').val();
            if (undefined == school_name || "" == school_name) {
                $('#school-name').parent('div').addClass('has-error');
                $('#school-name-error').removeClass('not-visible');
                return;
            }
            $.ajax({
                    url: 'http://139.196.29.70/test/teacher/addProfileDetailInformation.php',
                    type: 'post',
                    data: {
                        Status: $('#identity').val(),
                        Siginiture: '',
                        SchoolCategory: school_type,
                        SchoolName: school_name,
                        ifOpen: 1,
                        professional: teacher_title,
                        teachingAge: teach_age,
                        mostBachelor: highest_education,
                        degreeSchoolName: graduate_school,
                        major: graduate_major,
                        teachingPoint: '',
                        achievement: '',
                        honor: '',
                        otherWork: ''
                    }
                })
                .done(function() {
                    $('img#step-img').attr('src', 'img/step3.png');
                    $('span.step3-text').addClass('my-text-blue');
                    $(step2).addClass('not-visible');
                    $('div#step3').removeClass('not-visible');
                    $('#step1').addClass('not-visible');
                })
                .fail(function() {
                    alert("school_type : " + school_type + "\n" +
                        "school_name : " + school_name + "\n" +
                        "teacher_title : " + teacher_title + "\n" +
                        "teach_age : " + teach_age + "\n" +
                        "highest_education : " + highest_education + "\n" +
                        "graduate_school : " + graduate_school + "\n" +
                        "graduate_major : " + graduate_major);
                    //测试用，ajax成功后删除
                    $('img#step-img').attr('src', 'img/step3.png');
                    $('span.step3-text').addClass('my-text-blue');
                    $(step2).addClass('not-visible');
                    $('div#step3').removeClass('not-visible');
                    $('#step1').addClass('not-visible');
                });
        } else {
            var at_school_name = $('#at-school-name').val();
            var at_school_major = $('#at-school-major').val();
            $.ajax({
                    url: 'index.html',
                    type: 'post',
                    data: {
                        at_school_name: at_school_name,
                        at_school_major: at_school_major,
                        teach_age: teach_age,
                        highest_education: highest_education,
                    },
                })
                .done(function() {
                    $('img#step-img').attr('src', 'img/step3.png');
                    $('span.step3-text').addClass('my-text-blue');
                    $(step2).addClass('not-visible');
                    $('div#step3').removeClass('not-visible');
                    $('#step1').addClass('not-visible');
                })
                .fail(function() {
                    alert("at_school_name : " + at_school_name + "\n" +
                        "at_school_major : " + at_school_major + "\n" +
                        "teach_age : " + teach_age + "\n" +
                        "highest_education : " + highest_education);
                    //测试用，ajax成功后删除
                    $('img#step-img').attr('src', 'img/step3.png');
                    $('span.step3-text').addClass('my-text-blue');
                    $(step2).addClass('not-visible');
                    $('div#step3').removeClass('not-visible');
                    $('#step1').addClass('not-visible');
                });
        }

    });

    $('#btn-getcode').click(function(event) {
        $.ajax({
                url: 'http://139.196.29.70/test/teacher/getVerifyCode.php',
                type: 'get',
                data: {
                    telephone: $('#phone').val(),
                    type: 1
                }
            })
            .done(function() {
                var btn = $(this);
                $(btn).attr('disabled', 'disabled');
                $(btn).html("重新获取(60s)");
                var count = 59;
                var countdown = setInterval(countDown, 1000);

                function countDown() {
                    $(btn).attr('disabled', 'disabled');
                    $(btn).html("重新获取(" + count + "s)");
                    if (count == 0) {
                        $(btn).html("获取验证码").removeAttr("disabled");
                        clearInterval(countdown);
                    }
                    count--;
                }
            });

    });

    $('input#school-name').on('input', function(event) {
        if ("" != $(this).val()) {
            $(this).parent('div').removeClass('has-error');
            $('#school-name-error').addClass('not-visible');
        };
    });

    $('img#iphone-dl').hover(function() {
        $(this).attr('src', 'img/iphone-download-select.png');
    }, function() {
        $(this).attr('src', 'img/iphone-download.png');
    });

    $('img#android-dl').hover(function() {
        $(this).attr('src', 'img/android-download-select.png');
    }, function() {
        $(this).attr('src', 'img/android-download.png');
    });

    $('#identity').change(function() {
        if ($(this).val() == 0) {
            $('#step2-type1').removeClass('not-visible');
            $('#step2-type2').addClass('not-visible');
        } else if ($(this).val() == 1) {
            $('#step2-type2').removeClass('not-visible');
            $('#step2-type1').addClass('not-visible');
        }
    });

});
