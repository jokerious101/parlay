<template>
    <div class="columns">
        <div class="column">
            <div class="columns is-vcentered">
                <div class="column is-four-fifths">
                    <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" v-model="matchlink" type="text" placeholder="Text input">
                    </div>
                    </div>
                </div>
                <div class="column">
                    <label></label>
                    <div class="buttons is-centered bd-notification">
                        <a class="button is-success" @click="generateMatch">Generate</a>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="field" v-for="(match, key) in matches" :key="key">
                     <span class="control">
                        <label class="is-checkbox is-rounded" style="align-items:center;">
                            <input id="mycheckbox" checked="checked" type="checkbox">
                            <span  class="icon checkmark">
                            <i class="fa fa-check"></i>
                            </span>
                            <span>
                                <div class="columns level">
                <div class="column is-one-fifth">
                    10:00:00
                </div>
                <div class="column">
                    <!-- TEAM A -->
                    <div class="columns">
                        <div class="column is-one-third">
                            <div class="columns level">
                                <div class="column is-one-fifth mr-2 pb-0">
                                    ICON
                                </div>
                                <div class="column pb-0">
                                    {{match.team_a}}
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <button
                                class="button is-info is-light is-fullwidth is-outlined"
                            >
                            {{match.team_a_spread}}
                            </button>
                        </div>
                        <div class="column is-one-third">
                            <button
                                class="button is-info is-light is-fullwidth is-outlined"
                            >
                           {{match.team_a_total}}
                            </button>
                        </div>
                    </div>
                    <!-- TEAM B -->
                    <div class="columns">
                        <div class="column is-one-third">
                            <div class="columns level">
                                <div class="column is-one-fifth mr-2 pb-0">
                                   ICON
                                </div>
                                <div class="column pb-0">
                                    {{match.team_b}}
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <button
                                class="button is-info is-light is-fullwidth is-outlined"
                            >
                           {{match.team_b_spread}}
                            </button>
                        </div>
                        <div class="column is-one-third">
                            <button
                                class="button is-info is-light is-fullwidth is-outlined"
                            >
                            {{match.team_b_total}}
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                            </span>
                        </label>

                     </span>
                </div>
                  
            </div>
            <div class="columns">
                    <div class="field is-grouped pt-2 text-right">
                    <div class="control">
                        <button class="button is-link" @click="saveMatch">Save</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div> 
        </div>
    </div>   
            
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
    name: `CreateMatch`,
    data(){
        return {
            matchlink: ''
        }
    },
    components: {
    },
    computed: {
      ...mapGetters(["matches"]),
      ...mapState(["matches"]),
    },
    mounted() {
       // this.$store.dispatch("GET_MATCHES");
    },
    methods: {
        async generateMatch(){
          const payload = {
            link: this.matchlink
          }
          const create = await this.$store.dispatch('GET_MATCHES', payload);
          console.log("create match", create);
          // await this.$store.dispatch('GET_MATCHES');
          // console.log('generate matches', this.matches);
        }
    }
};
</script>

<style lang="scss">
$primary: hsl(171, 100%, 41%);
$link:  hsl(217, 71%, 53%);
$info: hsl(204, 86%, 53%);


$success: hsl(141, 71%, 48%);
$button-static-color: #7a7a7a !default;
$button-static-background-color: #f5f5f5 !default;
$button-static-border-color: #dbdbdb !default;
$button-border-width: 1px !default;
$button-padding-vertical: calc(0.375em - #{$button-border-width}) !default;
$button-padding-horizontal: 5.75em !default;
$radius-small: 3px;

$size-small: .75rem;
  $radius-small: 2px;
  $size-medium: 1.25rem;
  $size-large: 1.5rem;
  

@mixin button-small {
  font-size: $size-small;
}
@mixin  button-medium {
  font-size: $size-medium;
}
@mixin button-large {
font-size: $size-large
}

// Here starts the real code
label.is-checkbox {
  background: $primary;
  &.is-primary {
    background: $primary;
 }
  &.is-success {
    background: $success;
  }
  &.is-static {
    background-color: $button-static-background-color;
    border-color: $button-static-border-color;
    color: $button-static-color;
    box-shadow: none;
    pointer-events: none;
         .checkmark:before {
       background: rgba($button-static-color,0.3);
     }
  }
  border: $button-border-width solid transparent;
  text-align: center;
  white-space: nowrap;
  display: inline-flex;
  justify-content:center;
  &.is-primary {
    background: $primary;
  }
  padding: $button-padding-vertical $button-padding-horizontal;
  border-radius: $radius-small;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .checkmark {
    color: transparent;
    position: relative;
    i {
      z-index: 1;
      
    }
    &:before {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 0;
      border-radius: $radius-small;
      border: 1px solid rgba(black, 0.2);
    }
  }
  input[type="checkbox"] {
    position: absolute;
    visibility: hidden;
    cursor: pointer;    
    &:checked ~ .checkmark {
      color: inherit;
      
    }
  }
  
  &.is-rounded {
     border-radius: 9999px;
    .checkmark:before {
      border-radius: 9999px;
    }
  }
  
  &:hover {
    box-shadow: inset 0px 0px 9999px rgba(black, 0.05);
  }
  &:active {
    box-shadow: inset 0px 0px 9999px rgba(black, 0.1);
  }
  &.is-small {
    @include button-small;
  }
    &.is-medium {
    @include button-medium;
  }
    &.is-large {
    @include button-large;
  }
 .icon {
    &, &.is-small, &.is-medium, &.is-large {
        height: 1.5em;
        width: 1.5em;
        margin-left: -0.35em;
        margin-right: 0.35em;
    }

    
    &:first-child:not(:last-child) {
        margin-right: 0.1875em;
        margin-left:calc(-01.375em - #{$button-border-width});
    }
    &:last-child:not(:first-child) {
        margin-left: 0.1875em;
        
        margin-right:calc(-0.375em - #{$button-border-width});
    }
    &:first-child:last-child {
        margin-left:calc(-0.575em - #{$button-border-width});
    }
}
}
</style>
