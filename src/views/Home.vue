<template>
  <div class="container marketing">
    <br />
    <br />
    <div class="jumbotron">
      <h1 class="display-3">Welcome to MJ Music</h1>
      <p class="lead">
        Listen Greatest hit song around the world
      </p>
      <hr class="my-4" />
      <p>
         
      </p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="about" role="button">About us</a>
      </p>
    </div>
    <h1>Category</h1>
    <br />
    <div class="row">
      <div class="col-lg-4">
        <img
          src="data:image/jpeg;base64,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"
          class="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
        />
        <br />
        <br />
        <h2>Thai</h2>
        <p>
          Want to listen Thai song ? <br />
          Just click me !!
        </p>
        <p>
          <a class="btn btn-secondary" href="/thai" role="button">Click &raquo;</a>
        </p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img
          src="data:image/jpeg;base64,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"
          class="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
        />
        <br />
        <br />
        <h2>Thai-Country</h2>
        <p>
          Want to listen Thai-Country song ? <br />
          Just click me !!
        </p>
        <p>
          <a class="btn btn-secondary" href="thai-country" role="button">Click &raquo;</a>
        </p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img
          src="https://i.insider.com/5dcebbb779d7570274675e72?width=1100&format=jpeg&auto=webp"
          class="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
        />
        <br />
        <br />
        <h2>International</h2>
        <p>
          Want to listen International song ? <br />
          Just click me !!
        </p>
        <p>
          <a class="btn btn-secondary" href="#" role="button">Click &raquo;</a>
        </p>
      </div>
      <!-- /.col-lg-4 -->
    </div>
    <!-- /.row -->

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          Become The Star !!
          <span class="text-muted">Upload your own music</span>
        </h2>
        <p class="lead">
          Upload your music here if it has many listener we'll pay you much more than you think <br> Become our superstar !!
        </p>
      </div>
      <div class="col-md-5">
        <img
          src="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/28707/article_full%401x.jpg"
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          >
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">
          More than 500000 Music
          <span class="text-muted">Join with us !</span>
        </h2>
        <p class="lead">
          There's around 500000 song from artist around the world include Justin Bieber, Taylor Swift Etc.
        </p>
      </div>
      <div class="col-md-5 order-md-1">
        <img
          src="https://i.insider.com/5ab3dccb7708e96d5c27b8ae?width=1100&format=jpeg&auto=webp"
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
        >
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          Register Now
        </h2>
        <p class="lead">
          Get more benefit 
        </p>
      </div>
      <div class="col-md-5">
        <img
          src="https://gromaudio.com/newsletter/september2017/images/Listen-to-Music.jpg"
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
        >
      </div>
    </div>

    <hr class="featurette-divider" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
