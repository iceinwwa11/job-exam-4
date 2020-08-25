<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
    >
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Sidebar Menu</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item href="top-chart" @click="hide"
                >Top Chart Music</b-nav-item
              >
              <b-nav-item href="about" @click="hide">About us</b-nav-item>
              <b-dropdown id="dropdown-1" text="Music Catagory" class="m-md-2">
                <b-dropdown-item href="/thai">Thai</b-dropdown-item>
                <b-dropdown-item href="/thai-country">Thai country</b-dropdown-item>
                <b-dropdown-item href="international">International</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide"
            >Close Sidebar</b-button
          >
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
