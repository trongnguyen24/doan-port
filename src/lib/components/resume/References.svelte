<script>
	import { _ } from 'svelte-i18n';
</script>

<section>
	<div class="bg-white sticky top-0">
		<div class="text-lg font-medium magic-title py-4">{$_('references.title')}</div>
	</div>
	<div class="grid md:grid-cols-2 text-slate-600 gap-6 md:gap-8">
		<article>
			<small>Manager · TPF Vietnam</small>
			<p class="font-semibold text-slate-900">Mr. Nhan Dong</p>
			<p><a href="tel:0908567834">Phone: 0908 567 834</a></p>
			<p><a href="mailto:wookofu@gmail.com">Email: wookofu@gmail.com</a></p>
		</article>
		<article>
			<small>Co-founder · Coconut Group</small>
			<p class="font-semibold text-slate-900">Mr. Cuong Viet</p>
			<p><a href="tel:0989116656">Phone: 0989 116 656</a></p>
			<p><a href="mailto:vietcuong308@gmail.com">Email: vietcuong308@gmail.com</a></p>
		</article>
	</div>
</section>

<style>
	p {
		@apply py-1;
	}

	article {
		@apply flex flex-col gap-0;
	}
</style>
