<template>
    <div>
        this is error page
        <h1>error status: {{ error.statusCode }}</h1>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error-layout'
}
</script>