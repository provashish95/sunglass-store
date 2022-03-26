import React from 'react';
import './Description.css';

const Description = () => {
    return (
        <div className="row my-5 text-box p-3">
            <div className="col">
                <h4 className="text-color fw-bolder">How React Works? </h4>
                <p>We know react is a declarative, efficient, and flexible JavaScript library for building user interfaces.React used to build single-page applications.And react allows us to create reusable UI components.
                    রিএক্টের সাহায্যে আমরা পেজ রিফ্রেস না করে করেই কোনো state change করতে পারি যার জন্য রিএক্ট দিয়ে বানানো ওয়েব সাইট অনেক fast  হয় । রিএক্ট বার বার ব্যবহার করা যায় এইরকম প্রয়োজনীয় component make করে।
                    একটি ওয়েবসাইটের বিভিন্ন অংশ কে component বলে বা application এর build in block কেই component বলা হয়। Component এর ভেতরে markup and JavaScript logic থাকতে পারে , একটা component এর ভেতরে আরো অনেক গুলা component থাকতে পারে , এবং সবার শেষে সব গুলা component কে JSX return করতে হয়। JSX আমাদের  html code জাভাস্ক্রিপ্টের ভেতর লিখতে সাহায্য করে কিন্তু সেগুলা অরজিনাল html না এবং jsx এর ভেতর আমরা কার্লিব্যাকেস দিয়ে JavaScript লিখতে পারি। JSX কে ভ্যানিলা জাভাস্ক্রিপ্টএ কনভার্ট করার জন্য  web pack library সব component কে শুধুমাত্র একটা bundle file এ store করে ব্রাউজারে রান করার জন্য।এরপর রিএক্ট state use করে state হচ্ছে ডাটা রাখে ডাইনামিক্যালি ভাবে এবং এটা আমাদের একটা ARRAY AND FUNCTION retun করে। এবং রিএক্ট নিজে একটা virtual dom create করে ঠিক অরজিনাল dom এর মত করে যাতে রিএক্ট বুঝতে পারে change টা কোথায় হইছে এবং রিএক্ট change টা একটা  algorithm এর মাধ্যমে খুবই সহজ ভাবে বুঝতে পারে এবং সাথে সাথে কাজ করে মানে ফুল Dom rerender না করে শুধু মাত্র যেখানে change হইছে সেখানে rerender করে। এই জন্য রিএক্ট অনেক দ্রুত কাজ করতে পারে।এবং রিএক্ট life cycle effect আছে মানে যখন কোনো component crate , update , remove হয় তখনই effect function গুলো call হয়, এবং এই সব কিছুই useEfect hook দিয়ে ম্যানেজ হয়। তাই আমরা বলতে পারি It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug
                </p>
                <h4 className="text-color fw-bolder">Props VS State</h4>
                <p>State হচ্ছে updateble একটা হুক যা ডাটা রাখে এবং প্রয়োজন মত ডাটা UPDATE করে এছারা State component  এর বিভিন্ন ইনফরমেশন রাখতে পারে । এটা USER ACTION উপর নির্ভর করে এবং state কে modify or access করতে গেলে component এর ভেতর থেকেই করতে হবে ।
                </p>
                <p>অন্যদিকে Props হচ্ছে এমন একটা component যা html tag এর attribute এর value or data store করে রাখে এবং এটা DATA PASS করতে পারে একটা component থেকে অন্য একটা component এ এবং এটা অনেকটা FUNCTION ARGUMENTS এড় মতই কাজ করে ।</p>
                <p>Props হচ্ছে read only but state asynchronously change হতে পারে। Props এর মান পরিবর্তন করা যায় না মানে immutable কিন্তু State is mutable.Props are used to communicate between components.And States can be used for rendering dynamic changes with the component.Stateless component can have Props.Stateless components cannot have State.Props make components reusable.State cannot make components reusable.	Props are external and controlled by whatever renders the component.The State is internal and controlled by the React Component itself.</p>
            </div>
        </div>
    );
};

export default Description;