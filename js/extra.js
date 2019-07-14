var elem = document.getElementById("fullscreen");
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Ed ge */
        elem.msRequestFullscreen();
    }
}

window.addEventListener('load',function() {
    $(document).ready(function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: [ 'resourceTimeGrid', 'interaction', 'timeGrid' , 'resourceDayGrid'],
            timeZone: 'UTC',
            defaultView: 'resourceTimeGridDay',
            allDaySlot: false, 
            selectMirror: true,
            header: {
              left: '',
              center: 'title',
              right: 'prev,today,next',
            },
            titleFormat: {weekday: 'long' },
            resources: [
            { id: 'a', title: 'Room A' },
            { id: 'b', title: 'Room B'},
            { id: 'c', title: 'Room C' },
            { id: 'd', title: 'Room D' }
            ],
            events: 'https://fullcalendar.io/demo-events.json?with-resources=4&single-day'
        });
        calendar.render();
    
        var datepicker = $('#datetimepicker12');
        datepicker.datetimepicker({
            inline: true,
            format: 'YYYY-MM-DD'
        })
        .on('dp.change', function(e) {
            calendar.gotoDate(e.date.format('YYYY-MM-DD'));
        });

        $('.fc-prev-button span, .fc-next-button span, .fc-today-button').click(function() {
            setTimeout(function(){
                datepicker.data('DateTimePicker').date(calendar.getDate());
            }, 150);
        });
    });
});