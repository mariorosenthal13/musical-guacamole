<!-- START ARTIST GALLERY SECTION -->
<section id="gallery" class="section_4">
    <!-- ARTIST GALLERY TITLE -->
    <div class="title">
        <div class="">
            <h1>Artists</h1>
            <p>2018 roster</p>
        </div>
    </div>
    <div id="artist-gallery" class="row img_gallery">
        <div class="col-8 banner_1">
            <div class="row">
                <div class="col">
                    <a href="profile/<?php echo $artists[0]['id'] ?>" class="anim_border"></a>
                    <a href="" class="img_link"><img src="/img/<?php echo $artists[0]['picture'] ?> " alt="Galler Image 1"></a>
                    <p><?php echo $artists[0]['first_name']. " " . $artists[0]['last_name'] ?></p>
                </div>
                <div class="col">
                    <a href="profile/<?php echo $artists[1]['id'] ?>" class="anim_border"></a>
                    <a href="" class="img_link"><img src="/img/<?php echo $artists[1]['picture'] ?>" alt="Galler Image 2"></a>
                    <p><?php echo $artists[1]['first_name']. " " . $artists[1]['last_name'] ?></p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <a href="profile/<?php echo $artists[2]['id'] ?>" class="anim_border"></a>
                    <a href="" class="img_link"><img src="/img/<?php echo $artists[2]['picture'] ?>" alt="Galler Image 3"></a>
                    <p><?php echo $artists[2]['first_name']. " " . $artists[2]['last_name'] ?></p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <a href="profile/<?php echo $artists[3]['id'] ?>" class="anim_border" data-toggle="modal"></a>
                    <a href="" class="img_link"><img src="/img/<?php echo $artists[3]['picture'] ?>" alt="Galler Image 4"></a>
                    <p><?php echo $artists[3]['first_name']. " " . $artists[3]['last_name'] ?></p>
                </div>
                <div class="col">
                    <a href="profile/<?php echo $artists[4]['id'] ?>" class="anim_border" data-toggle="modal"></a>
                    <a href="" class="img_link"><img src="/img/<?php echo $artists[4]['picture'] ?>" alt="Galler Image 5"></a>
                    <p><?php echo $artists[4]['first_name']. " " . $artists[4]['last_name'] ?></p>
                </div>
            </div>
        </div>
        <div class="col-4 banner_2">
            <div class="row">
                <div class="col">
                    <a href="profile/<?php echo $artists[5]['id'] ?>" class="anim_border"></a>
                    <a href="" class="img_link"><img src="/img/<?php echo $artists[5]['picture'] ?>" alt="Galler Image 6"></a>
                    <p><?php echo $artists[5]['first_name']. " " . $artists[5]['last_name'] ?></p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <a href="profile/<?php echo $artists[6]['id'] ?>" class="anim_border"></a>
                    <a href="" class="img_link"><img src="/img/<?php echo $artists[6]['picture'] ?>" alt="Galler Image 7"></a>
                    <p><?php echo $artists[6]['first_name']. " " . $artists[6]['last_name'] ?></p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <a href="profile/<?php echo $artists[7]['id'] ?>" class="anim_border"></a>
                    <a href="" class="img_link"><img src="/img/<?php echo $artists[7]['picture'] ?>" alt="Galler Image 8"></a>
                    <p><?php echo $artists[7]['first_name']. " " . $artists[7]['last_name'] ?></p>
                </div>
            </div>
        </div>
        <div id="popup-container">
            <div class="popup_block" id="popup_block">
                <div id="slides-container"></div>
                <div class="popup_left popup_arrow">
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                </div>
                <div class="popup_right popup_arrow">
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
            <ul></ul>
        </div>
    </div>
    <div class="row">
        <div class="col cta">
            <a href="/artists">More artists</a>
        </div>
    </div>
</section>
<!-- END ARTIST GALLERY SECTION  -->