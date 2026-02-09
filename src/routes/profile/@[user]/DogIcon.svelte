<script lang="ts">
    let { name, imageURL, dogPageURL} = $props();

</script>

<div class="box">
    <div class="image">
        <img src={imageURL} alt={name}>
    </div>
    <div class="name">
        <h2>{name}</h2>
    </div>
</div>

<style>
    .box{
        width: 100px;
        height: 120px;
        display: flex;
        flex-direction: column;
    }
    .image{
        width: 100px;
        height: 100px;
        border-radius: 16px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .name{
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .name h2{
        margin: 0;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
