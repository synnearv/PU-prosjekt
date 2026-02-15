<script lang="ts">
    let { name, breed, imageURL, dogPageURL} = $props();

</script>

<div class="card">
    <div class="image-container">
        <img src={imageURL} alt={name}>
    </div>
    <div class="info-box">
        <b>{name}</b>
        <p>{breed}</p>
    </div>
</div>

<style>
    .card{
        width: 300px;
        aspect-ratio: 1 / 1.5;
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .card:hover {
        animation: shake 0.3s;
        transition-duration: 0.3s;
        box-shadow: 0 0 20px 0 var(--primary-color), 0 0 50px 0 var(--secondary-color);
    }

    .image-container {
        width: 100%;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .info-box {
        border-top: 3px solid var(--font-color);
        padding: 16px;
    }

    @keyframes shake {
        0% { transform: translateY(0) }
        50% { transform: translateY(-5px) }
        100% { transform: translateY(0) }
    }
</style>
