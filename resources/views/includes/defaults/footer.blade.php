
<!-- START FOOTER SECTION -->
<?php  $eventsobject = DB::table('events')->get();
foreach ($eventsobject as $key => $event)
{
    $events[$key] = [
        'id' => $event->id,
        'day' => $event->day,
        'month' => $event->month,
        'year' => $event->year,
        'city' => $event->city,
        'state' => $event->state,
        'name' => $event->name,
        'venue' => $event->venue
    ] ;
}
array_reverse($events);?>
<footer id="footer">
    <div class="bg_image" style="background-image: url(https://picsum.photos/1920x1280)"></div>
    <div class="overly"></div>
    <div class="section">
        <div class="row footer">
            <div class="col">
                <h2>ABOUT STRANGE PEOPLE</h2>
                <p>We are a collective of underground artists united for the love of music.
                Everyday we strive in maintaining the absolute perfect balance in musical freedom
                while keeping the techno dream alive. In this chapter ouf our lives we have come
                to grow our reach of people and to spread the good message of underground music to the people.
                Most of us resive in Denver / Miami feel free to shoot us a message for inquires regarding booking
                or if you just want to shoot the shit with us.</p>
            </div>
            <div class="col">
                <h2>UPCOMING EVENTS</h2>
                <?php foreach($events as $event) {?>
                <div class="day_num">
                    <a href="">
                        <span><?php echo $event['day']?></span>
                        <div>
                            <p><?php echo $event['month']?></p>
                            <p><?php echo $event['year']?></p>
                        </div>
                        <p><?php echo $event['name']?></p>
                    </a>
                </div>
                <?php } ?>
            </div>
            <div class="col">
                <div class="footer_logo">
                    <img src="img/strange-people-white.png" alt="Logo">
                </div>
                <div class="info">
                    <p class="main_p">Van Down By the River</p>
                    <p><a href="tel: +1 (786) 818-0694">Phone: +1 (786) 818-0694</a></p>
                    <p><a href="mailto:support@bets.com">Email: booking@strangeppl.com</a></p>
                </div>
                <div class="folow">
                    <ul>
                        <li><a href="https://soundcloud.com/strangepeople_ofc"><i class="fa fa-soundcloud"></i></a></li>
                        <li><a href="https://www.beatport.com/label/strange-people/72778"><i class="fa fa-headphones"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row f_1">
        <div class="col">
            <div class="copyright">
                <span>Copyright © Strange People 2018</span>
            </div>
        </div>
    </div>
</footer>
<!-- END FOOTER SECTION -->
