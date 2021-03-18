<script>
  import { Route } from 'tinro' 
  import { user } from './auth.js'
  import Protected from './Protected.svelte'
</script>
<h1>Google Auth Demo</h1>

<nav>
  <a href="/">Home</a>
  |
  <a href="/protected">Protected</a>
  |
  {#if $user}
    <button on:click={() => user.logout()}>Logout</button>
  {:else}
    <button on:click={() => user.signin()}>Sign In</button>
  {/if}
</nav>

<Route path="/">
  <h1>Home Page</h1>
</Route>
<Route path="/protected">
  <Protected />
</Route>
