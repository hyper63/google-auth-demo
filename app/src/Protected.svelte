<script>
  import { user } from './auth.js'

    const getProfile = (token) => 
      fetch('http://localhost:4000/api', { 
          headers: { 
              Authorization: `Bearer ${token}` 
            }
        }
      )
      .then(res => res.json())

</script>
{#if $user}
  <h1>Protected User Info</h1>
  <p>{$user.profile.name}</p>
  <p>{$user.profile.email}</p>
  <hr />
  <p>{$user.token}</p>
  <hr />
  {#await getProfile($user.token) then profile}
    <p>name: {profile.name}</p> 
    <p>email: {profile.email}</p>
  {/await}
{/if}
