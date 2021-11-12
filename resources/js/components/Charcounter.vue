<template>
    <p class="text-right font-bold opacity-50 text-80 text-xs mt-2">
        <span :class="indicatorClass">{{ value.length }}</span><span v-if="maxChars"> / {{ maxChars }}</span>
    </p>
</template>

<script>
    export default {
        props: ['value', 'maxChars', 'warningThreshold'],

        computed: {
            indicatorClass: function () {
                if (this.maxChars) {
                    if (this.value.length > this.maxChars) {
                        return 'text-danger';
                    }
                }

                if (this.warningThreshold) {
                    if (this.value.length > this.warningThreshold) {
                        return 'text-orange';
                    }
                }

                return 'text-success';
            }
        },
    }
</script>
