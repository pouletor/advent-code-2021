<script>
	import Header from "./Header/Header.svelte";
	import Keyboard from "./Keyboard/Keyboard.svelte";

	export let day;
</script>

<Header day={day} />
<Keyboard />