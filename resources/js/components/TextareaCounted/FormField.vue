<template>
    <default-field :field="field" :errors="errors" :full-width-content="true">
        <template slot="field">
            <div class="relative">
                <textarea
                    class="w-full form-control form-input form-input-bordered py-3 h-auto"
                    :id="field.attribute"
                    :dusk="field.attribute"
                    :readonly="readonly"
                    :required="required"
                    v-model="value"
                    v-bind="extraAttributes"
                ></textarea>
                <div class="flex space-x-2">
                  <p v-if="hasError" class="flex-1 help-text error-text my-2 text-danger">
                    {{ firstError }}
                  </p>
                  <charcounter :value="value" :max-chars="field.maxChars" :warning-threshold="field.warningAt"></charcounter>
                </div>
            </div>
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
        created () {
          console.log(field)
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
