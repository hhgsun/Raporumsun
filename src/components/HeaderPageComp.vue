<template>
  <div id="headerPageComp">
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{{ title }} <span v-if="badge" class="badge badge-secondary">{{ badge }}</span></a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderPageComp',
  props: {
    title: String,
    badge: String
  }
}
</script>
