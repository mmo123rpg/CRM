$(document).ready(function () {
    resizeActivityHeight();
    resizeHeight();

    $(window).off("resize").on("resize", function() {
        $(".tooltip").each(function() {
            var tooltip = $(this);
            if (tooltip.is(":visible")) {
                var ctrl = $(tooltip.context);
                ctrl.tooltip('show');
            }
        });
    });
    
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    resizeHeight();
});

$(function () {
    $(window).resize(function () {
        resizeActivityHeight();
        resizeHeight();
    });

    $(window).scroll(function () {
        resizeActivityHeight();
    });

    $('input[id=lefile]').change(function () {
        $('#get-file-input').val($(this).val());
    });

    $.fn.modal.prototype.constructor.Constructor.DEFAULTS.backdrop = 'static';

    function killAlignCenter() {
        if ($(window).width() <= 768) {
            $('.vertical-alignment-helper').css("display", "block");
            $('.vertical-align-center').css("display", "block");
        } else {
            $('.vertical-alignment-helper').css("display", "table");
            $('.vertical-align-center').css("display", "table-cell");
        }
    }
    jQuery(window).resize(function () {
        hideMenu();
        killAlignCenter();
    });
    $('.modal-resize').on('shown.bs.modal', function () {
        killAlignCenter();
    });  

    hideMenu(); // for loading/refreshing the page
    function hideMenu() {
        if ($(window).width() <= 1200) {
            $('body').addClass('hidden-left');
            $('body').removeClass('show-left2');
        } else {
            $('body').removeClass('hidden-left');
        }
    }
    
    jQuery('.menu-collapse-left').click(function () {
        if (!$('body').hasClass('hidden-left')) {
            if ($('.headerwrapper').hasClass('collapsed')) {
                $('.headerwrapper, .mainwrapper').removeClass('collapsed');
            } else {
                $('.headerwrapper, .mainwrapper').addClass('collapsed');
                $('.children').hide(); // hide sub-menu if leave open
            }
        } else {
            if (!$('body').hasClass('show-left')) {
                $('body').addClass('show-left');
            } else {
                $('body').removeClass('show-left');
                $('body').removeClass('show-left2');
            }
        }
        return false;
    });

    function floatLabel(inputType){
        $(inputType).each(function(){
            var $this = $(this);
            // on focus add cladd active to label
            $this.next().addClass("label-textarea");
        });
    }
    // just add a class of "floatLabel to the input field!"
    floatLabel("textarea");

    jQuery('.menu-collapse').click(function () {
        var Common_LabelMenuControl_Home = $('#Common_LabelMenuControl_Home').val();
        var Common_LabelMenuControl_Activities = $('#Common_LabelMenuControl_Activities').val();
        var Common_LabelMenuControl_Report = $('#Common_LabelMenuControl_Report').val();
        var Common_LabelMenuControl_Dashboard = $('#Common_LabelMenuControl_Dashboard').val();
        var Common_LabelMenuControl_Voucher = $('#Common_LabelMenuControl_Voucher').val();
        var Common_LabelMenuControl_Admin = $('#Common_LabelMenuControl_Admin').val();
        var Common_LabelMenuControl_Campaign = $('#Common_LabelMenuControl_Campaign').val();
        var Common_LabelMenuControl_ReviewManagement = $('#Common_LabelMenuControl_ReviewManagement').val();

        if (!$('body').hasClass('show-left2')) {
            $('body').addClass('show-left2');

            removeToolTipAttributes($('.menu_home').closest('li'));
            removeToolTipAttributes($('.menu_activity').closest('li'));
            removeToolTipAttributes($('.menu_report').closest('li'));
            removeToolTipAttributes($('.menu_dashboard').closest('li'));
            removeToolTipAttributes($('.menu_voucher').closest('li'));
            removeToolTipAttributes($('.menu_admin').closest('li'));
            removeToolTipAttributes($('.menu_campaign').closest('li'));
            removeToolTipAttributes($('.menu_review_management').closest('li'));
        }
        else {
            $('body').removeClass('show-left2');

            addToolTipAttributes($('.menu_home').closest('li'), Common_LabelMenuControl_Home);
            addToolTipAttributes($('.menu_activity').closest('li'), Common_LabelMenuControl_Activities);
            addToolTipAttributes($('.menu_report').closest('li'), Common_LabelMenuControl_Report);
            addToolTipAttributes($('.menu_dashboard').closest('li'), Common_LabelMenuControl_Dashboard);
            addToolTipAttributes($('.menu_voucher').closest('li'), Common_LabelMenuControl_Voucher);
            addToolTipAttributes($('.menu_admin').closest('li'), Common_LabelMenuControl_Admin);
            addToolTipAttributes($('.menu_campaign').closest('li'), Common_LabelMenuControl_Campaign);
            addToolTipAttributes($('.menu_review_management').closest('li'), Common_LabelMenuControl_ReviewManagement);
        }
        return false;
    });

    // For Media Queries
    
    
    $('.datetimepicker').datetimepicker({
        icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-angle-up',
            down: 'fa fa-angle-down ',
            previous: 'fa fa-arrow-left',
            next: 'fa fa-arrow-right',
            today: 'fa fa-list-alt',
            clear: 'fa fa-scissors'
        },
        collapse: true,
        format: 'DD-MM-YYYY'
    });

    $('.data-table').DataTable({
        bFilter: false,
        "paging": false,
        "info": false
    });
    jQuery('.dataTable').wrap('<div class="dataTables_scroll" />');
    // dropdown 100% width
    $("button").click(function () { $(".dropdown-width").css("width", $("#quicksearch-width").width()); });

    $("#home-disabled").click(function () {
        $("#home-remove-disabled input,#home-remove-disabled select").prop('disabled', false);
        $("#action-hide-1,#action-hide-2").show('normal');
    });
    $("#office-disabled").click(function () {
        $("#office-remove-disabled input,#office-remove-disabled select").prop('disabled', false);
    });
    $("#school-disabled").click(function () {
        $("#school-remove-disabled input,#school-remove-disabled select").prop('disabled', false);
    });
    $("#address-disabled").click(function () {
        $("#address-remove-disabled input,#address-remove-disabled select").prop('disabled', false);
    });
    $("#cases-disabled").click(function () {
        $(this).text("Save");
        $("#cases-remove-disabled input,#cases-remove-disabled select,#cases-remove-disabled textarea").prop('disabled', false);
    });

    $('[data-tooltip="true"]').tooltip({
        'container': 'body'
    });
    $('[data-popover="true"]').popover()
    $('.multiselect').multiselect({
        numberDisplayed: 20
    });
    $("button").click(function () { $(".dropdown-width").css("width", $(".typeahead").width()); });
    $('#country_v1-query').typeahead({
        minLength: 1,
        maxItem: 15,
        hint: true,
        highlight: false,
        source: {
            data: [
                "aaaaaaaaaaaaaaaaaaaaaaaAfghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
                "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
                "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
                "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma",
                "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
                "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the",
                "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
                "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
                "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
                "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
                "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
                "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
                "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos",
                "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
                "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
                "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco",
                "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
                "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
                "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
                "Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone",
                "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
                "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
                "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
                "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
                "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
            ]
        },
        callback: {
            onInit: function (node) {
            }
        }
    });
    $(document).on('click', '.dropdown-menu', function (e) {
        if ($(this).hasClass('keep-open-on-click')) { e.stopPropagation(); }
    });
});

function addToolTipAttributes($element, title) {
    $element.attr('data-placement', 'true');
    $element.attr('data-tooltip', 'true');
    $element.attr('data-original-title', title);
}

function removeToolTipAttributes($element) {
    $element.removeAttr('data-placement');
    $element.removeAttr('data-tooltip');
    $element.removeAttr('data-original-title');
}

function resizeHeight() {
    var winHeight = $(window).outerHeight(),
        bodyHeight = $('body').height();

    block1Height = $('.block-1').height();
    block4Height = $('.block-4').height();

    var contentHeight = winHeight - 162 - block1Height;
    if ($(window).width() > 1600) {
        $('.tab-content1').css('min-height', winHeight - 610);
    } else {
        $('.tab-content1').css('min-height', winHeight - 488);
    }
}
function resizeActivityHeight() {
    var winHeight = $(window).innerHeight();
    var winWidth = $(window).innerWidth();

    var activityHeight = winHeight - 126;
    $('.activity-content').css('min-height', activityHeight);
}
$('#get-tab-block-1 a').click(function(e) {
    var txt = $(e.target).text();
    $('#tab-block-1').text(txt);
});
// $('#get-tab-block-2 a').click(function(e) {
//     var txt = $(e.target).text();
//     $('#tab-block-2').text(txt);
// });

$('#get-tab-block-2').click(function(e) {
    var txt = $(e.target).text();
    var href = $(e.target).attr('href');
    $(this).find('>li').removeClass('active');
    $('#tab-block-2').text(txt);    
    $(".bs-adaptive-tabs-2 li a").removeClass('anchor');
    $(".bs-adaptive-tabs-2 li a[href="+ href + "]").addClass('anchor');
});
jQuery(window).resize(function () {
    var a = $('.nav-tabs-2 li.active a').attr('href');
    var b = $('.bs-adaptive-tabs-2 li[role="presentation"]:visible a.anchor').attr('href');        
    if (a=b) {
        $('#profile-tab-2-name').text(" ");
        $(".nav-tabs-2,.nav-tabs-2 li").removeClass('active');
        $('.bs-adaptive-tabs-2 li:visible a.anchor').parent().addClass('active');
        $(".bs-adaptive-tabs-2 li a").removeClass('anchor');
    }  
});

function show_li_dropdown2(){
    var tab_wrapper = $(".bs-adaptive-tabs-2");
    var hidden_lists = tab_wrapper.find('>li:not(li.dropdown):not(:visible)');

    if (hidden_lists.length > 0) {
        tab_wrapper.find("li.dropdown").show();
    }
    else {
        tab_wrapper.find("li.dropdown").hide();
    }

    tab_wrapper.find('ul.dropdown-menu').html(hidden_lists.clone(true).show());
    tab_wrapper.find('>li:not(li.dropdown)').click(function(e) {
        $('#tab-block-2').text(" "); 
    });
}
show_li_dropdown2();
jQuery(window).resize(function () {
    show_li_dropdown2();
});

$('#get-tab-block-4').click(function(e) {
    var txt = $(e.target).text();
    var href = $(e.target).attr('href');
    $(this).find('>li').removeClass('active');
    $('#profile-tab-4-name').text(txt);    
    $(".bs-adaptive-tabs-3 li a").removeClass('anchor');
    $(".bs-adaptive-tabs-3 li a[href="+ href + "]").addClass('anchor');
});
jQuery(window).resize(function () {
    var a = $('.nav-tabs-3 li.active a').attr('href');
    var b = $('.bs-adaptive-tabs-3 li[role="presentation"]:visible a.anchor').attr('href');        
    if (a=b) {
        $('#profile-tab-4-name').text(" ");
        $(".nav-tabs-3,.nav-tabs-3 li").removeClass('active');
        $('.bs-adaptive-tabs-3 li:visible a.anchor').parent().addClass('active');
        $(".bs-adaptive-tabs-3 li a").removeClass('anchor');
    }  
});

function show_li_dropdown(){
    var tab_wrapper = $(".bs-adaptive-tabs-3");
    var hidden_lists = tab_wrapper.find('>li:not(li.dropdown):not(:visible)');

    if (hidden_lists.length > 0) {
        tab_wrapper.find("li.dropdown").show();
    }
    else {
        tab_wrapper.find("li.dropdown").hide();
    }

    tab_wrapper.find('ul.dropdown-menu').html(hidden_lists.clone(true).show());
    tab_wrapper.find('>li:not(li.dropdown)').click(function(e) {
        $('#profile-tab-4-name').text(" "); 
    });
}
show_li_dropdown();
jQuery(window).resize(function () {
    show_li_dropdown();
});

function resizeModal(element) {    
    this.$element     = $(element);
    var window_height = ($(window).innerHeight());
    var modal_header = this.$element.find('.modal-header').outerHeight();
    var modal_footer = this.$element.find('.modal-footer').outerHeight();
    var modal_body_height = ( window_height - modal_header - modal_footer - 16);
    this.$element.find('.modal-body').css({"height":modal_body_height,"overflow":"auto"}); 
    this.$element.find('.editor-email-edit-content .cke_contents').css("height",modal_body_height - 105);     
}
$('.modal-resize').on('shown.bs.modal', function () {
    $(this).show();
    resizeModal(this);
});     
jQuery(window).resize(function () { 
    resizeModal($('.modal-resize.in'));
});

$('.add-point-scheme-issue-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-point-scheme-issue-tab li a[href="#' + id + '"]').tab('show');
});
$('.add-point-scheme-pg-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-point-scheme-pg-tab li a[href="#' + id + '"]').tab('show');
});
$('.add-point-scheme-qty-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-point-scheme-qty-tab li a[href="#' + id + '"]').tab('show');
});
$('.edit-point-scheme-issue-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-point-scheme-issue-tab li a[href="#' + id + '"]').tab('show');
});
$('.edit-point-scheme-pg-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-point-scheme-pg-tab li a[href="#' + id + '"]').tab('show');
});
$('.edit-point-scheme-qty-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-point-scheme-qty-tab li a[href="#' + id + '"]').tab('show');
});
$('.add-voucher-scheme-setting-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-voucher-scheme-setting-tab li a[href="#' + id + '"]').tab('show');
});
$('.edit-voucher-scheme-setting-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-voucher-scheme-setting-tab li a[href="#' + id + '"]').tab('show');
});
$('.add-benefit-scheme-issue-settings-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-benefit-scheme-issue-settings-tab li a[href="#' + id + '"]').tab('show');
});
$('.add-benefit-scheme-criteria-qty-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-benefit-scheme-criteria-qty-tab li a[href="#' + id + '"]').tab('show');
});
$('.edit-benefit-scheme-issue-settings-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-benefit-scheme-issue-settings-tab li a[href="#' + id + '"]').tab('show');
});
$('.edit-benefit-scheme-criteria-qty-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-benefit-scheme-criteria-qty-tab li a[href="#' + id + '"]').tab('show');
});
$('.add-message-scheme-criteria-pg-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-message-scheme-criteria-pg-tab li a[href="#' + id + '"]').tab('show');
});
$('.add-message-scheme-criteria-qty-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-message-scheme-criteria-qty-tab li a[href="#' + id + '"]').tab('show');
});
$('.edit-message-scheme-criteria-pg-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-message-scheme-criteria-pg-tab li a[href="#' + id + '"]').tab('show');
});
$('.edit-message-scheme-criteria-qty-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-message-scheme-criteria-qty-tab li a[href="#' + id + '"]').tab('show');
});
$('.add-chance-scheme-issue-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-chance-scheme-issue-tab li a[href="#' + id + '"]').tab('show');
});
$('.add-chance-scheme-criteria-pg-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-chance-scheme-criteria-pg-tab li a[href="#' + id + '"]').tab('show');
});
$('.add-chance-scheme-criteria-qty-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-chance-scheme-criteria-qty-tab li a[href="#' + id + '"]').tab('show');
});
$('.edit-chance-scheme-issue-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-chance-scheme-issue-tab li a[href="#' + id + '"]').tab('show');
});
$('.edit-chance-scheme-criteria-pg-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-chance-scheme-criteria-pg-tab li a[href="#' + id + '"]').tab('show');
});
$('.edit-chance-scheme-criteria-qty-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-chance-scheme-criteria-qty-tab li a[href="#' + id + '"]').tab('show');
});
$('.add-sigon-promotion-criteria-pq-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-signon-promotion-criteria-pq-tab li a[href="#' + id + '"]').tab('show');
})
$('.edit-sigon-promotion-criteria-pq-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-signon-promotion-criteria-pq-tab li a[href="#' + id + '"]').tab('show');
})
$('.add-upgrade-promotion-criteria-pq-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-upgrade-promotion-criteria-pq-tab li a[href="#' + id + '"]').tab('show');
})
$('.edit-upgrade-promotion-criteria-pq-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-upgrade-promotion-criteria-pq-tab li a[href="#' + id + '"]').tab('show');
})
$('.add-point-promotion-give-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-point-promotion-give-tab li a[href="#' + id + '"]').tab('show');
})
$('.add-point-promotion-multiplier-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-point-promotion-multiplier-tab li a[href="#' + id + '"]').tab('show');
})
$('.add-point-promotion-criteria-pq-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-point-promotion-criteria-pq-tab li a[href="#' + id + '"]').tab('show');
})
$('.add-point-promotion-criteria-qty-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-point-promotion-criteria-qty-tab li a[href="#' + id + '"]').tab('show');
})
$('.edit-point-promotion-give-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-point-promotion-give-tab li a[href="#' + id + '"]').tab('show');
})
$('.edit-point-promotion-multiplier-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-point-promotion-multiplier-tab li a[href="#' + id + '"]').tab('show');
})
$('.edit-point-promotion-criteria-pq-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-point-promotion-criteria-pq-tab li a[href="#' + id + '"]').tab('show');
})
$('.edit-point-promotion-criteria-qty-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-point-promotion-criteria-qty-tab li a[href="#' + id + '"]').tab('show');
})
$('.add-voucher-promotion-setting-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-voucher-promotion-setting-tab li a[href="#' + id + '"]').tab('show');
})
$('.add-voucher-promotion-pg-select').on('change', function(e) {
    var id = $(this).val();
    $('#add-voucher-promotion-pg-tab li a[href="#' + id + '"]').tab('show');
})
$('.edit-voucher-promotion-setting-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-voucher-promotion-setting-tab li a[href="#' + id + '"]').tab('show');
})
$('.edit-voucher-promotion-pg-select').on('change', function(e) {
    var id = $(this).val();
    $('#edit-voucher-promotion-pg-tab li a[href="#' + id + '"]').tab('show');
})
// function PDEV_999 () {    
//     var right = $('.navbar-right').outerWidth();
//     var icon = $('.acc_action').outerWidth();
//     var wrapper_width = $(window).outerWidth();
//     var top = $('.navbar-fixed-top').height();
//     var p = $(".acc_info p").outerWidth();
//     var x = wrapper_width - 120 - right - icon;
//     if (top > 63) {
//         $(".acc_info").css('width',x);              
//     }
// }
// PDEV_999();
// jQuery(window).resize(function () { 
//     PDEV_999();
// });

    // $("textarea").next().css({ "background": "#fafafa" });
    // $("textarea").focus(function () {
    //     $(this).next().css({ "background": "white" });
    // });

    // $("textarea").blur(function () {
    //     $(this).next().css({ "background": "#fafafa" });
    // });
    // $("textarea:disabled" ).next().css({ "background": "#eeeeee" });
    // $("textarea" ).prop('disabled', false).next().css({ "background": "#eeeeee" });
    $("textarea").scroll(function() {
        if ($(this).scrollTop() > 0) {
            $(this).next().css("top", "-20px");
        } else {
            $(this).next().css("top", "0");
        }
    });



    // add_dataTable_sort();
    // $(".data-table,.dataTables_scrollHead").click(function() {
    //   add_dataTable_sort();
    // }); 
    // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //   add_dataTable_sort();
    // })
    // $('.modal').on('shown.bs.modal', function () {
    //     add_dataTable_sort();
    // });     
    // function add_dataTable_sort() {  
    //   $(".data-table th img").remove();
    //   $(".data-table th.sorting_asc").append("<img src='Content/img/sort_asc.png'>");
    //   $(".data-table th.sorting_desc").append("<img src='Content/img/sort_desc.png'>");
    //   $(".data-table th.sorting").append("<img src='Content/img/sort_both.png'>");
    //   $(".data-table th.sorting_disabled img").remove();
    // } 

// function alignModal(){
//     var modalDialog = $(this).find(".modal-dialog");
//         modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
//     }
//     // Align modal when it is displayed+-


//     $(".modal").on("shown.bs.modal", alignModal);

//     // Align modal when user resize the window
//     $(window).on("resize", function(){
//         $(".modal:visible").each(alignModal);
// });


// function createTimeline() {    
//     var container = document.getElementById('visualization2');

//     var now = moment().minutes(0).seconds(0).milliseconds(0);
//     var itemCount = 11;


//     var names = [' '];

//     var options = {
//         groupOrder: 'content',
//         stack: true,
//         zoomKey: 'ctrlKey',
//         verticalScroll: true,
//         horizontalScroll: false,                                
//         selectable: false,
//         maxHeight: 200,
//         minHeight:100,
//         showCurrentTime: false    
//     };
    
//     var items = new vis.DataSet
//     ([
//       {id: 1, start: '2016-1-1', end: '2016-1-3','className': 'cycles-active'},
//       {id: 2, start: '2016-1-1', end: '2016-1-8','className': 'cycles-expired'},
//       {id: 3, start: '2016-1-1', end: '2016-1-13','className': 'cycles-active'},
//       {id: 4, start: '2016-1-1', end: '2016-1-3','className': 'cycles-active'},
//       {id: 5, start: '2016-1-1', end: '2016-1-8','className': 'cycles-expired'},
//       {id: 6, start: '2016-1-1', end: '2016-1-13','className': 'cycles-active'},
//       {id: 7, start: '2016-1-1', end: '2016-1-3','className': 'cycles-active'},
//       {id: 8, start: '2016-1-1', end: '2016-1-8','className': 'cycles-expired'},
//       {id: 9, start: '2016-1-1', end: '2016-1-13','className': 'cycles-active'},
//     ]);

//     var timeline = new vis.Timeline(container);
//     timeline.setOptions(options);
//     timeline.setItems(items);

//     var x = $('.vis-timeline');
//     if(x.height()>200){
//         $(".vis-inner").removeClass('vis-hidden');
//     }
//     else{
//         $(".vis-inner").addClass('vis-hidden');
//     }
// }
// $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) { 
//     createTimeline();
// });
