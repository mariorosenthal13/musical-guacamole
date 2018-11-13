
<!-- START EVENTS SECTION -->
<section id="on-tour" class="section_3">
    <div class="section_bg_image" style="background-image: url(https://picsum.photos//1920x1024)"></div>
    <div class="section">
        <!-- EVENTS TITLE -->
        <div class="title">
            <div class="">
                <h1>Events</h1>
                <p>2018</p>
            </div>
        </div>
        <!-- TICKETS -->
        <div class="col tickets">
            <?php foreach( $events as $key => $event ) { ?>
                <div class="row ticket">
                    <div class="col">
                        <div class="row">
                            <a class="col-10 ticket-link" href="events/<?php echo $event['id'] ?>">
                                <div class="day">
                                    <div class="day_num">
                                        <span><?php echo $event['day'] ?></span>
                                        <div>
                                            <p><?php echo $event['month'] ?></p>
                                            <p><?php echo $event['year'] ?></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="name">
                                    <p><span><?php echo $event['venue'] ?></span> // <span><?php echo $event['city'] ?>, <?php echo $event['state'] ?></span></p>
                                </div>
                            </a>
                            <div class="col-2 buy">
                                <a href="#">More Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</section>
<!-- END EVENTS SECTION -->