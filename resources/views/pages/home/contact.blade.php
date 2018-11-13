<!-- START CONTACT US SECTION -->
<section id="contact-us" class="section_8" style="background-image: url(https://picsum.photos/1920x1024)">
    <div class="overly"></div>
    <div class="section">
        <!-- CONTACT US TITLE -->
        <div class="title">
            <div class="">
                <h1>Contact Us</h1>
                <p>Get in Touch</p>
            </div>
        </div>
        <div class="form">
        <?php echo Form::open(array('action' => 'EmailController@send')) ?>
                <div class="row fild_1">
                    <div class="col-sm-6">
                        <input type="text" class="form-control" name="name" placeholder="Full name">
                    </div>
                    <div class="col-sm-6">
                        <input type="email" class="form-control" name="email" id="inputEmail4" placeholder="Email">
                    </div>
                </div>
                <div class="form-group">
                    <textarea class="form-control" id="exampleFormControlTextarea1" name="content" rows="3" placeholder="Message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">SEND MESSAGE</button>
        <?php echo Form::close() ?>
        </div>
    </div>
</section>
<!-- END START CONTACT US SECTION -->