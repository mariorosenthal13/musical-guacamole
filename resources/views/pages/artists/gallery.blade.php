
<!-- START PHOTOGALLERY SECTION -->
<section id="discography">
    <div class="row">
        <?php foreach ( $artists as $artist) { ?>
            <div class="w-100 col-md-4 music-banner" >
                <div class="w-100">
                    <img class="music-banner-image" src="img/<?php echo $artist['picture'] ?>" alt="<?php echo $artist['first_name'] . "," . $artist['last_name'] ?>">
                    <div class="music-banner-text">
                        <div>
                            <p><?php echo $artist['first_name'] ?></p>
                        </div>
                        <h2><?php echo $artist['last_name'] ?></h2>

                    </div>
                    <a href="profile/<?php echo $artist['id'] ?>" class="music-banner-link"></a>
                </div>
            </div>
        <?php } ?>
    </div> {{--end row--}}
</section>
<!-- END PHOTOGALLERY SECTION -->