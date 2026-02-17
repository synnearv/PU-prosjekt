<script context="module" lang="ts">

  export type Registration = {
    id: string;
    userId: string;
    userName: string;
  };

  export type Competition = {
    id: string;
    name: string;
    description: string;
    date_time: string;
    image_URL: string | null; //does not have to be a picture, can be empty
  }

</script>

<script lang="ts">

  export let data: {
    competition: Competition;
    registrations: Registration[];
  }

//   export let registrations: Registration[] = [];
// Dummydata
    const currentUserId = "u10";

    let registrations: Registration[] = [
    { id: "r1", userId: "u1", userName: "Bruno" },
    { id: "r2", userId: "u2", userName: "Nala" },
    { id: "r3", userId: "u3", userName: "Mira" },
    { id: "r4", userId: "u4", userName: "Bamse" },
    { id: "r5", userId: "u5", userName: "Storm" },
    { id: "r6", userId: "u6", userName: "Pia" },
    ]
// Dummydata end

    $: isRegistered = registrations.some(
        r => r.userId === currentUserId
    ); 

    function toggleRegistration() {
        if (isRegistered) {
        // remove me
            registrations = registrations.filter(
             r => r.userId !== currentUserId
            );
        } else {
        // add me
            const newRegistration: Registration = {
                id: crypto.randomUUID(),
                userId: currentUserId,
                userName: "[Hundenavn]"
            };

            registrations = [...registrations, newRegistration];
        }
    }

</script>

<div id="wrapper">
    <div id="image">
        Image <!--{data.competition.image_URL}-->
    </div>
    <div id="competition">
        <h1>[Competition name] <!--{data.competition.name}--></h1>
        <h3>[Date and time] <!--{data.competition.date_time}--></h3>
        <div id="description">
            [Competition description] <!--{data.competition.description}-->
        </div>
    </div>
    
    <div id="side">
        <button onclick={toggleRegistration}>
            {isRegistered ? "Sign off" : "Sign up now"}
        </button>
        <div id="participants">
            <div id="participants-header">
            Participants
            </div>
    
            <div id="users">
                <div class="dots">
                    {#each //data. //add data when you have database
                    registrations as r (r.id)}
                        <span class="dot" title={r.userName} ></span>
                    {/each}
                </div>
            </div>
        </div>
    </div>

</div>

<style>
    #wrapper {
        display: grid;
        max-width: 1100px;
        margin: 40px auto;
        padding: 24px;

        grid-template-columns: 2fr 1fr;
        grid-template-areas: 
            "image image"
            "competition side";

        gap: 20px;
    }

    #image {
        display: grid;
        grid-area: image;
        place-items: center;
        border-radius: 10px;
        height: 325px;

        background-color: #FFF;
    }

    #competition {
        grid-area: competition;
        border-radius: 10px;

        width: 600px;
        min-height: 300px;
        padding: 20px;
        background-color: #FFF;
    }

    #description {
        margin-top: 16px;
        min-height: 200px;
        border-radius: 10px;
        display: grid;
        place-items: center;
        background-color: #F7F8FA;
    }

    #side{
        display: grid;
        gap: 12px;
        grid-area: side;
    }

    #side button {
        justify-self: center;
    }

    button {
        width: 256px;
        border: 0;
        border-radius: 4px;
		background-color: #ff77bb;
		color: white;
		border: solid black 0.5px;
		width: 200px;
		padding: 15px 10px;
		font-size: 15px;

		border-radius: 4px;
		cursor: pointer;
    }   

    button:hover {
		background-color: #fa59a9;
	}

	button:active {
		background-color: #fd3599;
	}

    #participants{
        border: 1px solid #e6e8ec;
        border-radius: 10px;
        background-color: #FFF;
    }

    #participants-header{
        padding: 15px;
        text-align: center;
        border-bottom: 1px solid #e6e8ec;
        font-size: larger;
    }

    #users{
        min-height: 220px;
        padding: 18px;
    }

    .dots{
        display:grid;
        grid-template-columns: repeat(5, 45px);
        gap: 20px;
        justify-content:center;
        align-content:start;
    }

    .dot{
        width:50px;
        height:50px;
        border-radius:50%;
        background: #fa59a9;
    }

    .dot:hover {
        transform: scale(1.2);
    }

    :global(body) {
        margin: 0;
        background-color: #F7F8FA
    }


</style>