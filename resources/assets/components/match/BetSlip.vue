<template>
    <div class="panel is-primary">
        <p class="panel-heading ">
            Bet Slip
        </p>
        <div class="p-2">
            <div class="field">
                <label class="label">Select Number of Picks</label>
                <div class="control">
                    <div class="select is-info is-fullwidth my-2">
                        <select v-model="totalPicks">
                            <option value="3">P3 / Pick 3 (x5 win)</option>
                            <option value="4">P4 / Pick 4 (x10 win)</option>
                            <option value="5">P5 / Pick 5 (x20 win)</option>
                            <option value="6">P6 / Pick 6 (x40 win)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <label class="label">Bet Amount</label>
                <div class="control has-icons-left has-icons-right">
                    <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                        v-model="betAmount"
                    />
                    <span class="icon is-small is-left">
                        <i class="fas fa-coins"></i>
                    </span>
                </div>
                <p class="help is-info">Minimum bet is 100.00</p>
            </div>

            <div class="my-2">
                <span class="tag is-primary is-medium is-light is-fullwidth"
                    >Picks:</span
                >

                <div
                    v-for="(pick, key) in pickCombinations"
                    :key="`pick-${key}`"
                    class="my-2"
                >
                    <article class="message is-primary is-small">
                        <div class="message-header">
                            <p>Pick #{{ key + 1 }}</p>
                            <button class="delete" aria-label="delete"></button>
                        </div>
                        <div class="message-body">
                            <div class="is-size-5">{{ pick.selected }}</div>
                            <div class="is-size-7">{{ pick.matchTitle }}</div>
                        </div>
                    </article>
                </div>
            </div>
            <hr />
            <div class="my-2 is-flex is-justify-content-right">
                <button class="button is-primary is-outlined" disabled>
                    Submit Bet Slip
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            totalPicks: 3,
            betAmount: 100,
            pickCombinations: [
                {
                    selected: "Bucks +2.5",
                    matchTitle: "Nets at Bucks"
                },
                {
                    selected: "Nets UNDER 240.5",
                    matchTitle: "Nets at Bucks"
                },
                {
                    selected: "Hornets OVER 230.5",
                    matchTitle: "Pacers at Hornets"
                }
            ]
        };
    }
};
</script>

<style></style>
