<template>
    <default-field :field="field" :errors="errors" :full-width-content="true">
        <template slot="field">
            <div class="relative">
                <textarea
                    class="w-full form-control form-input form-input-bordered py-3 h-auto"
                    :id="field.attribute"
                    :readonly="readonly"
                    :required="required"
                    v-model="value"
                    v-bind="extraAttributes"
                ></textarea>

                <charcounter :value="value" :max-chars="field.maxChars" :warning-threshold="field.warningAt"></charcounter>

            </div>

            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>
        </template>
    </default-field>
</template>

<script>
    import {FormField, HandlesValidationErrors} from 'laravel-nova';
    import Charcounter from '../Charcounter';

    export default {
        mixins: [FormField, HandlesValidationErrors],

        props: ['resourceName', 'resourceId', 'field'],

        components: {
            Charcounter
        },

        computed: {
            defaultAttributes() {
                return {
                    rows: this.field.rows,
                    class: this.errorClasses,
                    placeholder: this.field.name,
                }
            },
            
            extraAttributes() {
                const attrs = this.field.extraAttributes

                return {
                    ...this.defaultAttributes,
                    ...attrs,
                }
            },
        }
    }
</script>
