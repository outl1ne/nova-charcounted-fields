<template>
    <default-field :field="field">
        <template slot="field">
            <div class="relative">
                <input
                    type="text"
                    class="w-full form-control form-input form-input-bordered"
                    :id="field.attribute"
                    :dusk="field.attribute"
                    :readonly="readonly"
                    :required="required"
                    v-model="value"
                    v-bind="extraAttributes"
                    @input="handleChange"
                />
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
        computed: {
            defaultAttributes() {
                return {
                    pattern: this.field.pattern,
                    placeholder: this.field.placeholder || this.field.name,
                    class: this.errorClasses,
                }
            },

            extraAttributes() {
                const attrs = this.field.extraAttributes

                return {
                    // Leave the default attributes even though we can now specify
                    // whatever attributes we like because the old number field still
                    // uses the old field attributes
                    ...this.defaultAttributes,
                    ...attrs,
                }
            },
        }
    }
</script>
