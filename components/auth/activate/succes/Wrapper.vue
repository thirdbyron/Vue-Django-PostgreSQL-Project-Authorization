<template>
  <div class="auth_wrapper" @keyup.enter="resetPassword(userData)">
    <div class="auth_wrapper_second">
      <div class="auth_wrapper_top">
        <AuthLogo />
        
      </div>
      <div class="auth_wrapper_form">
        <AuthActivateSuccesTitle />
         <AuthActivateSuccesButton />
      </div>
    </div>
    <AuthBottom-text />
  </div>
</template>

<script>
export default {
    
}
</script>