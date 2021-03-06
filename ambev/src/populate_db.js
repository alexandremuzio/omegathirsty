import * as firebase from 'firebase';
import bar_events from './bar_events'
import bar from './bar'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB2kLOSWlLkiw-uOiuhZhnWYrAhe2e-4Oc",
  authDomain: "hackathonambev.firebaseapp.com",
  databaseURL: "https://hackathonambev.firebaseio.com",
  projectId: "hackathonambev",
  storageBucket: "",
  messagingSenderId: "375550617353"
};
firebase.initializeApp(config);
bar.start();
bar_events.start();

// Populates db
setTimeout(function() {
bar_events.save("Muller", "Dia de Hoje");
bar_events.save("Muzio", "Dia de ontem");
bar.save("Bar do Ze", "Rua dos Bobos, num 0");
bar.save("Bar do Peh", "Rua dos Bobs, num 1000");
bar.save("Bar do Calango", "Rua dos Otarios, num -1");
bar.save("Bar do Mut", "Rua dos PMs, num star");
bar.save("Bar do Macaco", "Avenida da Mata num 1");
}, 4000);