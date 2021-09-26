Vue.component('data-component', {
    props: ['noun1', 'noun2', 'verb1', 'verb2', 'adj1', 'adj2'],
    // template: `
    //     <div>
    //         <h3>This is a Mad Libs Activity!</h3>
    //         <h4>Fill in the blanks to form a wacky sentence!</h4>
    //         <input v-model="nounInput1"></input>
    //         <button v-on:click="replace(noun1, nounInput1)">Submit first noun</button>
    //         <br/>
    //         <input v-model="nounInput2"></input>
    //         <button v-on:click="replace(noun2, nounInput2)">Submit second noun</button>
    //         <br/>
    //         <input v-model="verbInput1"></input>
    //         <button v-on:click="replace(verb1, verbInput1)">Submit first verb (ending in -ing)</button>
    //         <br/>
    //         <input v-model="verbInput2"></input>
    //         <button v-on:click="replace(verb2, verbInput2)">Submit second verb (ending in -ed)</button>
    //         <br/>
    //         <input v-model="adjInput1"></input>
    //         <button v-on:click="replace(adj1, adjInput1)">Submit first adjective</button>
    //         <br/>
    //         <input v-model="adjInput2"></input>
    //         <button v-on:click="replace(adj2, adjInput2)">Submit second adjective</button>
    //         <br/>
    //         <p>I saw it! The {{noun1}} was {{verb1}} so much that it nearly {{verb2}}! The {{noun1}} was super {{adj1}} and 
    //         almost destroyed a whole {{noun2}}! You should have been there, man! It was so {{adj2}}!</p>
    //     </div>
    // `,
    template: `
        <div>
            <h3>This is a Mad Libs Activity!</h3>
            <h4>Fill in the blanks to form a wacky sentence!</h4>
            <input v-model="message"></input>
            <button v-on:click="sendReplace">Submit first noun</button>
            <br/>
            <p>I saw it! The {{noun1}} was {{verb1}} so much that it nearly {{verb2}}! The {{noun1}} was super {{adj1}} and 
            almost destroyed a whole {{noun2}}! You should have been there, man! It was so {{adj2}}!</p>
        </div>
    `,
    data: function() {
        return {
            message: '',
        }
    },
    methods: {
        sendReplace: function() {
            this.$emit('replace');
        },
    }
    
});




const mad = new Vue({
    el: '#mad',
    data: {
        nounInput1: '______',
        nounInput2: '______',
        verbInput1: '______',
        verbInput2: '______',
        adjInput1: '______',
        adjInput2: '______',
    },
    methods: {
        recieveReplace: function(data) {
            // this.nounInput1 = data;
            console.log(data);
        },
    },
});




const app = new Vue({
    el: '#app',
    data: {
        list: [
            {id:0, txt:"Heya folks"},
            {id:1, txt:"This is Software Saturdays intermediate week 2 lesson 4."},
            {id:2, txt:"This array is dynamically resizable."}
        ],
        inputText: '',
        latestId: 0,
        returnId: 0,
        returnList: [
            {num: 0, tex:''}
        ],
    },
    methods: {
        addToList: function() {
            this.list.push({id: ++this.latestId, txt:this.inputText});
        },
        getItem: function() {
            this.returnList.push({num: ++this.latestId, tex:this.list[this.returnId]});
        }
    },
});