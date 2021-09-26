<script>
	import translations from '../../translations';
	import { language } from '../../stores';
    export let status;

    let labelText = translations.components.labels
</script>

<div class="">
    <span>{status[$language]}</span>
</div>
