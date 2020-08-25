<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="/">MJ MUSIC</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/top-chart">Top Chart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Music Category</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/thai">Thai</a>
              <a class="dropdown-item" href="/thai-country">Thai-Country</a>
              <a class="dropdown-item" href="international">Interational</a>
            </div>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0 nav-item">
          <a class="nav-link" href="/Register">Register</a>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style></style>
