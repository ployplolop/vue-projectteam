<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">สถานที่ฮีลใจ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/travle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Travle
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/north1">ภาคเหนือ</a></li>
            <li><a class="dropdown-item" href="/sorth1">ภาคใต้</a></li>
            <li><a class="dropdown-item" href="/east1">ภาคตะวันออก</a></li>
            <li><a class="dropdown-item" href="/weat1">ภาคตก</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/capital1">ภาคกลาง</a></li>
          </ul>
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/food" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Food
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/North2">ภาคเหนือ</a></li>
            <li><a class="dropdown-item" href="/Sorth2">ภาคใต้</a></li>
            <li><a class="dropdown-item" href="/east2">ภาคตะวันออก</a></li>
            <li><a class="dropdown-item" href="/weat2">ภาคตก</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/capital2">ภาคกลาง</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="/video">Video</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" href="/contact">Contact</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <a href="/"><button class="btn btn-outline-success" type="button">Search</button></a> &nbsp; &nbsp; 
        <a href="/login"><button class="btn btn-outline-success" type="button">Login</button></a>
      </form>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name : 'Menu'
}
</script>

<style>

</style>