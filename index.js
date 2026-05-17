function checkPassword() {
    let pass = document.getElementById("passwordInput").value;
    let err = document.getElementById("errorMessage");

    if (pass === "sahory") {
        document.getElementById("welcomePage").classList.add("hidden");
        document.getElementById("secondPage").classList.remove("hidden");
    } else {
        err.innerText = "هزعلك… اتفضل حاول تاني 😏";
        err.classList.remove("hidden");

        setTimeout(() => {
            err.classList.add("hidden");
        }, 2000);
    }
}

function answerReady(isReady) {
    let msg = document.getElementById("readyMessage");
    let quiz = document.getElementById("quizSection");

    if (isReady) {
        msg.innerText = "أشطر كتكوت 🐥💕";

        setTimeout(() => {
            quiz.classList.remove("hidden");
        }, 1500);
    } else {
        msg.innerText = "و بعدين بقا في قلة الدب دي هتزعل ي نسونجي😡";

        setTimeout(() => {
            msg.innerText = "جاهز يا حبيبي؟";
        }, 2000);
    }
}
let step = 0;

let questions = [{
        q: "بتحبني؟ 👈👉",
        options: ["اه", "لا"]
    },
    {
        q: "تفتكر أنا بحبك؟ 💕",
        options: ["بحبك بس", "بحبك جدا", "بحبك بهبل"]
    }
];

function chooseAnswer(answer) {
    let msg = document.getElementById("msg");
    let nextBtn = document.getElementById("nextBtn");

    if (step === 0) {

        if (answer === "اه") {
            msg.innerText = `  انا كمان بحبك اوي اوي و بحب عيونك و ضحتك جدا 💕
انا قولتلك الكلام دا كتير بس هقوله تاني و هفضل أقوله انت اول شخص احبه و اتمني جدا يكون آخر شخص برضوا انت الوحيد اللي حسستني بحاجات حلوه كتير أهمها أن أكون مطمنه معاك 🩷
حرفيا انا معاك بكون مرتاحه و مطمنه جدا 
الوقت اللي بنكون زعلانين فيه أو مضايقين انا بتبقي نفسيتي وحشه اوي عشان انت زعلان ف لو سمحت يعني متبقاش بارد و متزعلش و متزعلنيش 🙂
انا بقيت بحب اي حاجه انت بتحبها 🙆
عايزه اقولك بقا اهم حاجه انا معاك في الوحشه قبل الحلوه و عمري ما هسيبك  الا لو انت عوزت دا و وقت ما تكون محتاج حاجه او. مضايق هتلاقيني اول واحده معاك حتي لو مش عايزني وقتها هكون معاك برضوا اتمني اي حاجه تشاركني فيها حتي لو صغيره حتي لو هتضايقني ي عم قولها المهم تشاركني في كل اللي مضايقك و والله هكون معاك و نعمل اللي يريحك 
انا حرفيا بخاف عليك من الزعل ف بلاش تضايق نفسك ولا تزعل من اي حاجه 
و بالنسبه لمشاكلك ايا كان نوعها اعرفها أو معرفهاش اكيد هتعدي و ربنا هيدبرها متقلقش و كدا كدا زي ما بقولك محدش بياخد غير نصيبه المهم تكون مرتاح 💕
بحبك 🥰 ❤️
اضغط التالي`;
        } else {
            msg.innerText = `المهم أنا بحبك ❤️`;
        }

        nextBtn.classList.remove("hidden");
    } else if (step === 1) {

        if (answer === "بحبك بس") {
            msg.innerText = `ولما أقولك حاجة غلط دلوقتي 😒`;
        } else if (answer === "بحبك جدا") {
            msg.innerText = `اه بحبك جدًا
بس برضو في أكتر 🌚`;
        } else if (answer === "بحبك بهبل") {
            showGallery();
            return;
        }

        nextBtn.classList.remove("hidden");
    }
}

function nextQuestion() {
    step++;

    let q = questions[step];

    document.getElementById("qBox").innerHTML = `
        <h2>${q.q}</h2>

        <div id="options">
            ${q.options.map(opt =>
                `<button onclick="chooseAnswer('${opt}')">${opt}</button>`
            ).join("")}
        </div>

        <p id="msg"></p>

        <button id="nextBtn" class="hidden" onclick="nextQuestion()">التالي</button>
    `;
}

function showGallery() {
    document.getElementById("qBox").innerHTML = `
        <h2>الحاجات دي كلها ليها معنى عندي ❤️</h2>

<p>
كل صورة أو فيديو هنا وراه إحساس،
وكل واحد منهم بيفكرني بحاجة حلوة بينا 💕
</p>

        <div class="gallery">

            <div class="card">
                <img src="s.jpg">
                <p> دي الصوره اللي اتخانقنا بسببها و. بسبب انك نزلتها عشان بحبها اوي و عجباني اوي بس اعمل اي بقا عنيد و عايز تشقط 
بس عامة بحب الصوره دي و بحسك كوتي اوي فيها 🥹🎀💕 </p>
            </div>

            <div class="card">
                <img src="se.jpg">
                <p> دي بحبها جدا برضوا لما كنت حالق بقا و وشك نور و برضوا مكنتش عايزاك تنزلها 
مفيش حلاقه تاني كدا كدا غير لما احلقلك انا بقا معلش بقا كسلت اقصها
بحبك علي فكره  و بحب ملامحك اوي 🌚💕 </p>
            </div>

            <div class="card">
                <img src="so.jpg">
                <p> دي بقا كانت في بداية تعارفنا و كنت لسه نازل الشغل و طلبت منك صوره اول صوره يعني تبعتهالي و انت في الشغل اشطر كتكوت كدا كدا بحسك بيبي اوي في الصوره دي 😂🎀💕💕</p>
            </div>

            <div class="card">
                <img src="sr.jpg">
                <p> بحب انا بقا الصور العشوائيه دي اللي تتبعت في اي وقت ايا كانت اي هي بس بحبها هنا كنت طالب قهوه و كنت قايلالك تطلبلي معاك و كنت بتوريني و قولتلي بتاعتنا احنا الاتنين عايزه اشرب مكانك علي فكره و مش بقرف منك بالعكس أنا أحب اي مكانك ☕✨💗</p>
            </div>

            <div class="card">
                <img src="ss.jpg">
                <p> اه بقا الصوره المفضله ليا بحسك فيها كاريزما كدا و راجل انت راجل في كل الصور طبعا 😂
بس دي اكتر صوره ظاهره كدا بحبها اوي بجد مغرمه و بحب عيونك فيها ✨💗💗💗</p>
            </div>

            <div class="card">
                <img src="ssa.jpg">
                <p>دي و انت مروح من الشغل و مكنتش عايز تكلمني كول تقريبا صورت اللي هي تتشاف مره و قولتلك اتصورلي تاني و اتصورت دي بحب برضوا انا الصور اللي بتبقي هلكان فيها دي و لما تكون الصوره متصوره عشاني انا مخصوص  علي فكره وحشني 🙂🌚💕</p>
            </div>

            <div class="card">
                <img src="sy.jpg">
                <p>طبعا هنا اليوم دا مكنتش طايقني و اتخانقنا بعدها أو قبلها مش فاكره بس كنت مش طايق نفسك برضوا و قعدت اتحايل عليك تتصور و اتصورت دي عسول اوي بس شكلك مش طايق اي حد عامة بحب صور الشغل كلها بحب كل صورك معرفش اي وصلني للمرحله دي استغفر الله 😂✨💕</p>
            </div>

            <div class="card">
                <video controls>
                    <source src="sa.mp4" type="video/mp4">
                </video>
                <p>نقطة ضعفي بقا و اكتر حاجه بحبك تبعتها الفيديوهات و انت بتغني في العربيه و اتمني برضوا تكون بتتبعت ليا انا بس 
في الفيديو برضوا مصمم تثبتلي انك نسوانجي بالاغنيه دي 😂😂 بس احلي نسوانجي كدا كدا 😂💕</p>
            </div>

            <div class="card">
                <video controls>
                    <source src="sh.mp4" type="video/mp4">
                </video>
                <p>ايوا بقا الاغنيه دي حبتها بسببك 😂❤️
فيديو بعد ما عملت اسنانك 😂
و عامة اول مره احس اغنيه مش بتندب فيها أو أنها موجهه للاكس حس علي دمك بقا و احترم نفسك و اعملي فيديوهات كتير من دي بحب ريأكشناتك اوي اوي 🌚😂💕</p>
            </div>

            <div class="card">
                <video controls>
                    <source src="sse.mp4" type="video/mp4">
                </video>
                <p>  من اول الفيدهات اللي كنت بتعملها بحب انا اي تصوير في العربيه سواء ليك أو اغاني اي حاجه 
روق الدنيا هتحلو 💕💗</p>
            </div>

            <div class="card">
                <video controls>
                    <source src="ssr.mp4" type="video/mp4">
                </video>
                <p>  هنا كنت علي البحر عايز تقعد لوحدك و انا بزن عليك و انت مش طايقني و صورتلي دا عامة بحب صور البحر جدا ما بالك بقا لو البحر و حبيبي معاه و القعده دي بجد نفسي اوي اقعدها معاك 🥹❤️</p>
            </div>

            <div class="card">
                <video controls>
                    <source src="sss.mp4" type="video/mp4">
                </video>
                <p>  طيب كوتي أمور كوتي شطور طيب كوتي أمور كوتي شطور كوتي ي حياتي ي كيوتي 😂🎀🎀🎀💕
بما انك طلعت بتحب الاغنيه دي 
احلي كوتي كدا كدا 🥹💕</p>
            </div>

            <div class="card">
                <video controls>
                    <source src="ssy.mp4" type="video/mp4">
                </video>
                <p>  اهي دي بقا الاغاني اللي بتخليني احس انك بتفكر في الاكس و لسه متخططش بس عادي المهم تكون مبسوط انا والله كل اللي بتمناه تكون فرحان و مبسوط و محقق اللي نفسك فيه ي سهوري 💕</p>
            </div>
            

        </div>
        <button onclick="showSongs()" class="musicBtn">
    في حاجة كمان 🎵
</button>
    `;
}function showSongs() {
    document.getElementById("qBox").innerHTML = `
        <h2>ودي شوية أغاني ليها معنى عندي 🎶❤️</h2>

        

        <div class="songs-list">

            <a href="https://youtu.be/N3Ekfl3A5vM?si=HdA0gd9OnPECHo3T" target="_blank">🎵  دا چورچ عشان انا بحبه و بهديك الاغنيه دي💕</a>

            <a href="https://youtu.be/3bqUQdaV1ZE?si=03g8skumtUARifDx" target="_blank">🎵  و ادي ليلة الدموع عشان بتحبها و بتحب تامر عاشور</a>

            <a href="https://youtu.be/aksziBG2rio?si=McNg2wBAXogsfYAe" target="_blank">🎵  و رامي صبري كمان ي عم انبسط 😂💕</a>

        </div>
        <h2 style="margin-top:40px;">
صور بتعبّر عن   احساسي ✨
</h2>



<div class="gallery">

    <div class="card">
        <img src="e1.jpg">
        <p>  اهو دا احساسي حرفيا لما اكون بكلمك و مبسوطين و مطمنه في وجودك 💗💗</p>
    </div>

    <div class="card">
        <img src="e2.jpg">
        <p>  كل اللي بتمناه هو أن اكون معاك معاك و بس سواء بخير أو لا المهم معاك 💕</p>
    </div>

    <div class="card">
        <img src="e3.jpg">
        <p>  اهي دي اكتر حاجه مخوفاني انا لما بنضايق شويه ببقي نفسيتي زفت بجد و بتعب ما بالك لو بعدت عني خالص انا مش قادره اتخيل دا 🥹</p>
    </div>

</div>
<div class="finalMessage">
    <h2>وفي الآخر... 💌</h2>

    <p>
       اخر حاجه بقا احب اقولهالك انك اغلي حاجه عندي انا مغرمه بتفاصيلك بكل حاجه حرفيا ي ساهر انت بالنسبالي اشطر و احسن حد عرفته عارفه ان بيجي عليك فترات وحشه بس اكيد هتعدي بس شاركني فيها خليني معاك 
انت شاطر جدا  و تتحب و انا هقف معاك في اي حاجه انت حاببها و حابب تعملها ايا كانت انا بشوف كل الكلام قليل جدا أنه يعبر عن اللي جوايا ليك 
طبعا مستني صور رقاصات و كدا لا ي روحي مفيش 🙂😂💕💕💕💕
    </p>
</div>
    `;
}