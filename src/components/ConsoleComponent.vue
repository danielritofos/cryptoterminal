<template>
    <div class="container">
        <h1>Консоль управления торговым ботом</h1>

        <div class="text-start">
            <label class="checkbox-ya align-content-center">
                Terminal
                <input type="checkbox" name="terminal"
                   v-model="terminal"
                   v-on:change="terminalChange"
                >
                <span class="checkbox-ya-switch"><span class="checkbox-ya-feature" data-label-on="Вкл" data-label-off="Откл"></span></span>
            </label>
        </div>
        <br>

        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Биржи (N)
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="accordion" id="accordionExchange">
                            <div class="row">
                                <div class="col-6">
                                    <ConsoleExchange
                                        v-for="ex in exchange" :key="ex.id"
                                        v-bind:ex="ex"
                                        v-on:change-exchange="ChangeExchange"
                                    />
                                </div>
                                <div class="col-6">
                                    <p class="text-start m-2">
                                        Памятка: Параметр А: “Торговый баланс” — деньги на которые торгует бот; Параметр Б: "Сумма позиции" —  сумма покупки монеты, $ (USDT); Параметр В: "Стоп - Лосс от цены" — %, по которому высчитывается цена от цены покупки  для открытия лимитного ордера продажи ниже цены покупки.                                            EX: Если Shitcoin куплен по цене 20$ и параметр Б стоит 5% (20*5%=1$), то лимитный ордер продажи откроется на цену 19$ ( 20$ - 1$); Параметр Г: "Тейк - Профит от цены" — %, по которому высчитывается цена от цены покупки  для открытия лимитного ордера продажи выше цены покупки.  EX: Если Shitcoin куплен по цене 20$ и параметр В стоит 5% (20*5%=1$), то лимитный ордер продажи откроется на цену 21$ ( 20$ + 1$); Параметр Д: "Ре - Бай" — %, по которому высчитывается цена от цены продажи  для открытия лимитного ордера для покупки выше цены продажи.                                  EX: Если Shitcoin продан по цене 20$ и параметр Г стоит 5% (20*5%=1$), то лимитный ордер на покупку откроется на цену 21$ ( 20$ + 1$); Параметр Е: "Финиш тайм" — время после листинга, которое позволяет боту открывать лимитные ордера. Считается в секундах. Граничный максимум 99 секунд после листинга. EX: биржа Бинанс залистит Shitcoin 32 января 2222 года в 13:00 по МСК. На бирже Гейт есть торговая пара Shitcoin/USDT. Она будет ботом торговаться согласно заданным параметрам с момента получения информации о листинге на Бинанс и до 32 января 2222 года в 13:00:30 по МСК.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Торгуются сейчас (N)
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ConsoleCurrentExchange
                            v-for="cex in current_exchange" :key="cex.id"
                            v-bind:cex="cex"
                            v-on:change-exchange="CurrentChangeExchange"
                        />
                    </div>
                </div>
            </div>
        </div>



<!--        <label class="checkbox-ios">-->
<!--            <input type="checkbox" checked>-->
<!--            <span class="checkbox-ios-switch"></span>-->
<!--        </label>-->
    </div>
</template>

<script>
    import ConsoleExchange from "./ConsoleExchange";
    import ConsoleCurrentExchange from "./ConsoleCurrentExchange";

    export default {
        name: "ConsoleComponent",
        data() {
            return{
                terminal: true,
                exchange: [
                    {id: 1,
                        ex_name: "binance",
                        ex_param: {
                            param_a: "param A",
                            param_b: "param B",
                            param_v: "param V",
                            param_g: "param G",
                            param_d: "param D",
                            param_e: "param E",
                        },
                        is_on: true
                        },
                    {id: 2,
                        ex_name: "binance two",
                        ex_param: {
                            param_a: "param A",
                            param_b: "param B",
                            param_v: "param V",
                            param_g: "param G",
                            param_d: "param D",
                            param_e: "param E",
                        },
                        is_on: false
                    }
                ],
                current_exchange: [
                    {
                        id: 1,
                        ex_name: "binance",
                        is_on: true
                    },
                    {
                        id: 2,
                        ex_name: "binance two",
                        is_on: false
                    }
                ]
            }
        },
        methods: {
            terminalChange() {
                // TODO ajax
                console.log(this.terminal)
            },
            ChangeExchange(id, isChecked) {
                //TODO ajax
                console.log(id)
                console.log(isChecked)
            },
            CurrentChangeExchange(id, isChecked) {
                //TODO ajax
                console.log(id)
                console.log(isChecked)
            }
        },
        mounted() {
            // fetch('http://127.0.0.1:5000/console')
            //     .then(response => response.json())
            //     .then(json => this.notif = json)
        },
        components: {
            ConsoleExchange,
            ConsoleCurrentExchange
        }

    }

    import $ from 'jquery'
    window.$ = $;

    // $(window).keyup(function(e){
    //     var target = $('.checkbox-ios input:focus');
    //     if (e.keyCode == 9 && $(target).length){
    //         $(target).parent().addClass('focused');
    //     }
    // });
    //
    // $('.checkbox-ios input').focusout(function(){
    //     $(this).parent().removeClass('focused');
    // });

    $(window).keyup(function(e){
        var target = $('.checkbox-ya input:focus');
        if (e.keyCode == 9 && $(target).length){
            $(target).parent().addClass('focused');
        }
    });

    $('.checkbox-ya input').focusout(function(){
        $(this).parent().removeClass('focused');
    });
</script>

<style>
    .checkbox-ya {
        display: inline-block;
        height: 28px;
        line-height: 28px;
        margin-right: 10px;
        position: relative;
        vertical-align: middle;
        user-select: none;
    }
    .checkbox-ya .checkbox-ya-switch {
        display: inline-block;
        box-sizing: border-box;
        width: 76px;
        height: 28px;
        margin: 0 auto;
        position: relative;
        background: linear-gradient(90deg, greenyellow 0%, greenyellow 50%, white 50%, white 200%);
        background-position: -72px 0;
        background-size: 200% 100%;
        border: 1px solid #bababb;
        border-radius: 3px;
        font-size: 13px;
        color: #000;
        transition: all 150ms ease-in;
    }
    .checkbox-ya .checkbox-ya-switch:before {
        content: '';
        display: block;
        box-sizing: border-box;
        width: 28px;
        height: 28px;
        position: absolute;
        top: 50%;
        left: -1px;
        text-indent: -100%;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 3px;
        transform: translateY(-50%);
        transition: all 150ms ease-in;
    }
    .checkbox-ya .checkbox-ya-feature {
        position: relative;
        display: block;
        height: 28px;
        line-height: 28px;
        overflow: hidden;
    }
    .checkbox-ya .checkbox-ya-feature:before, .checkbox-ya .checkbox-ya-feature:after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: all 150ms ease-in;
    }
    .checkbox-ya .checkbox-ya-feature:before {
        content: attr(data-label-on);
        left: -60%;
    }
    .checkbox-ya .checkbox-ya-feature:after {
        content: attr(data-label-off);
        right: 8px;
    }
    .checkbox-ya input[type=checkbox] {
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .checkbox-ya input[type=checkbox]:checked + .checkbox-ya-switch {
        background-position: 0 0;
        border-color: rgba(153,122,0,.5);
    }
    .checkbox-ya input[type=checkbox]:checked + .checkbox-ya-switch:before {
        left: calc(100% - 27px);
    }
    .checkbox-ya input[type=checkbox]:checked + .checkbox-ya-switch .checkbox-ya-feature:before {
        left: 13px;
    }
    .checkbox-ya input[type=checkbox]:checked + .checkbox-ya-switch .checkbox-ya-feature:after {
        right: -60%;
    }

    /* Hover */
    .checkbox-ya input[type=checkbox]:not(:disabled) + .checkbox-ya-switch:hover:before {
        border-color: rgba(0,0,0,.6);
    }
    .checkbox-ya input[type=checkbox]:not(:disabled) + .checkbox-ya-switch:hover {
        cursor: pointer;
    }

    /* Disabled */
    .checkbox-ya input[type=checkbox]:disabled + .checkbox-ya-switch {
        border-color: rgba(0, 0, 0, .1);
        filter: grayscale(70%);
    }
    .checkbox-ya input[type=checkbox]:disabled + .checkbox-ya-switch .checkbox-ya-feature {
        color: #999;
    }

    /* Focus */
    .checkbox-ya.focused .checkbox-ya-switch:before {
        border-width: 2px;
        border-color: #ffdb4d;
    }





    /*.checkbox-ios {*/
    /*    display: inline-block;*/
    /*    height: 28px;*/
    /*    line-height: 28px;*/
    /*    margin-right: 10px;*/
    /*    position: relative;*/
    /*    vertical-align: middle;*/
    /*    font-size: 14px;*/
    /*    user-select: none;*/
    /*}*/
    /*.checkbox-ios .checkbox-ios-switch {*/
    /*    position: relative;*/
    /*    display: inline-block;*/
    /*    box-sizing: border-box;*/
    /*    width: 56px;*/
    /*    height: 28px;*/
    /*    border: 1px solid rgba(0, 0, 0, .1);*/
    /*    border-radius: 25%/50%;*/
    /*    vertical-align: top;*/
    /*    background: #eee;*/
    /*    transition: .2s;*/
    /*}*/
    /*.checkbox-ios .checkbox-ios-switch:before {*/
    /*    content: '';*/
    /*    position: absolute;*/
    /*    top: 1px;*/
    /*    left: 1px;*/
    /*    display: inline-block;*/
    /*    width: 24px;*/
    /*    height: 24px;*/
    /*    border-radius: 50%;*/
    /*    background: white;*/
    /*    box-shadow: 0 3px 5px rgba(0, 0, 0, .3);*/
    /*    transition: .15s;*/
    /*}*/
    /*.checkbox-ios input[type=checkbox] {*/
    /*    display: block;*/
    /*    width: 0;*/
    /*    height: 0;*/
    /*    position: absolute;*/
    /*    z-index: -1;*/
    /*    opacity: 0;*/
    /*}*/
    /*.checkbox-ios input[type=checkbox]:not(:disabled):active + .checkbox-ios-switch:before {*/
    /*    box-shadow: inset 0 0 2px rgba(0, 0, 0, .3);*/
    /*}*/
    /*.checkbox-ios input[type=checkbox]:checked + .checkbox-ios-switch {*/
    /*    background: limegreen;*/
    /*}*/
    /*.checkbox-ios input[type=checkbox]:checked + .checkbox-ios-switch:before {*/
    /*    transform:translateX(28px);*/
    /*}*/

    /*!* Hover *!*/
    /*.checkbox-ios input[type="checkbox"]:not(:disabled) + .checkbox-ios-switch {*/
    /*    cursor: pointer;*/
    /*    border-color: rgba(0, 0, 0, .3);*/
    /*}*/

    /*!* Disabled *!*/
    /*.checkbox-ios input[type=checkbox]:disabled + .checkbox-ios-switch {*/
    /*    filter: grayscale(70%);*/
    /*    border-color: rgba(0, 0, 0, .1);*/
    /*}*/
    /*.checkbox-ios input[type=checkbox]:disabled + .checkbox-ios-switch:before {*/
    /*    background: #eee;*/
    /*}*/

    /*!* Focus *!*/
    /*.checkbox-ios.focused .checkbox-ios-switch:before {*/
    /*    box-shadow: inset 0px 0px 4px #ff5623;*/
    /*}*/
</style>