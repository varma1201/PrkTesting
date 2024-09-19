import "../../styles/service.css";
import Testtube from "../../assets/testtube.svg";
import { CiSearch } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, React } from "react";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const AllServices = [
  {
    title: "Testing",
    itemKey: "testing",
    path: "/services/testing",
    des: "Lorem ipsum dolor sit amet consectetur. Ac orci urna mi proin at. Nunc urna tortor accumsan cum ut. Commodo ipsum viverra sed lorem bibendum.",
    ServiceData: [
      {
        servTitle: "Food Test",
        servItems: [
          {
            heading: "Food and agriculture products",
            subItems: [
              {
                title: "Bakery & Confectionery Products",
                items: [
                  { name: "Bakery on Food", Certification: "IS 5402: 2012" },
                  { name: "Bbkery on Food", Certification: "IS 5402: 2012" },
                  { name: "Bckery on Food", Certification: "IS 5402: 2012" },
                  { name: "Bdkery on Food", Certification: "IS 5402: 2012" },
                  { name: "Bekery on Food", Certification: "IS 5402: 2012" },
                  { name: "Bfkery on Food", Certification: "IS 5402: 2012" },
                  { name: "Bgkery on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Beverages (Alcoholic/ Non- Alcoholic)",
                items: [
                  { name: "Beverages on Food", Certification: "IS 5402: 2012" },
                  { name: "Beverages on Food", Certification: "IS 5402: 2012" },
                  { name: "Beverages on Food", Certification: "IS 5402: 2012" },
                  { name: "Beverages on Food", Certification: "IS 5402: 2012" },
                  { name: "Beverages on Food", Certification: "IS 5402: 2012" },
                  { name: "Beverages on Food", Certification: "IS 5402: 2012" },
                  { name: "Beverages on Food", Certification: "IS 5402: 2012" },
                  { name: "Beverages on Food", Certification: "IS 5402: 2012" },
                  { name: "Beverages on Food", Certification: "IS 5402: 2012" },
                  { name: "Beverages on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Canned & Processed Foods",
                items: [
                  { name: "Canned on Food", Certification: "IS 5402: 2012" },
                  { name: "Canned on Food", Certification: "IS 5402: 2012" },
                  { name: "Canned on Food", Certification: "IS 5402: 2012" },
                  { name: "Canned on Food", Certification: "IS 5402: 2012" },
                  { name: "Canned on Food", Certification: "IS 5402: 2012" },
                  { name: "Canned on Food", Certification: "IS 5402: 2012" },
                  { name: "Canned on Food", Certification: "IS 5402: 2012" },
                  { name: "Canned on Food", Certification: "IS 5402: 2012" },
                  { name: "Canned on Food", Certification: "IS 5402: 2012" },
                  { name: "Canned on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Cereals, Pulses &Cereal Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Coffee&Cocoa Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Egg&Egg Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "FaecalStreptococci",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Fruit &Fruit Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Herbs, Spices & Condiments",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Jams, Juices, Sauces & Concentrates",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Meat & Meat Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Milk & dairy product",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Nuts & Nut Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Health supplements",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Poultry & Poultry Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Snack sand Instant Mixes",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Starch & Starch Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Sugar &Sugar Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Tea",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Vegetable &Vegetable Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
            ],
          },
          {
            heading: "Animal food and feed",
            subItems: [
              {
                title: "Groundnut Meal",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Pet Foods",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
            ],
          },
        ],
      },
      {
        servTitle: "ENVIRONMENT AND POLLUTION",
        servItems: [
          {
            heading: "Marine /Aquaculture FoodProducts",
            subItems: [
              {
                title: "Crab &Crab Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Fish&Fish Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title:
                  "Salted, dried smoked, pickled, marinated, frozen fish and other fish related products.",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Oyster",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Vibrio choleraeOyster",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "CFU/g",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Prawn&Prawn Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Shrimps",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Distilled/Demineralised water",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "DrinkingWater",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Ground Water/ Surface water",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Cookingwater, KitchenWater",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Coolant water",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Faecalstreptococci",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "IS 5887 Part 7",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Packaged Drinking water",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Packaged Natural MineralWater",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Water for Industrial Purpose",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Water for processed Food industry",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Water for Swimming Pooland Spas",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Water Purifiers",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
            ],
          },
          {
            heading: "Animal food & feed",
            subItems: [
              {
                title: "Oilseeds/ oilseed cake/ oilcake",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Pet Foods",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
            ],
          },
          {
            heading: "Food & agriculture products",
            subItems: [
              {
                title: "Bakery Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Biscuits,cakes,chips, wafers, pastry, brownie, muffin",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Bread, bun, khari, toast,cookies, rusk",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Candy, lolly,chewing gum, logenze, chocolate",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Alcoholicand Non alcoholic Beverages",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Beverages ( Alcoholic/ Non- alcoholic/ Carbonated)",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Cerealand Pulses product",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Cerealand Pulses product (Biscuits)",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Cerealand Pulses product (Cereals)",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Cerealand Pulses product (IdlyBatter)",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Cerealand Pulses product (Papad)",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Cerealand Pulses product (Vermicelli)",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Cerealand products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Food grainscereals pulses",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Food grainscereals pulses",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Paddy, Rice , Rice Powder",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Processed food grains, cereals & pulses",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Coffee &Coca products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Edible Oils &Fats, Ghee",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Oilsand fats",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Food Additives",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Dehydrated Fruit and Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title:
                  "Fruit Products, jam , jelly, concentrate, marmalade, nectar, pickle, sauce",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Fruits & Fruits Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Processed Fruitand products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Asafodetia",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Chillies, Capsicum(Lal Mirchi) powderand whole",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Cloves",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Coriander(whole and powder)",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Herbsand Spices",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Herbs,spices & condiments",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Pepper Black & White Powderand Whole",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Saffron",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Spicesand Condiments",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Turmeric(Powdered and finger)",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Honey",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Honey",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Honey and honey products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Meat, Fish & Egg Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Processes Meatand Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Raw Meat",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Milk & dairy products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Milk Powder",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Milk Products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title:
                  "Sterilized Milk/ Packages pasteurised milk /Flavoured milk",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title:
                  "Groundnut, Pistachio, Almound, Cashew, walnut, peanut, apricot nut",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Nuts & nut products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Common Salt",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title:
                  "Edible Common Salt/ Iodized salt / Vaccum Evaporated iodized salt/ Refined Iondized salt",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Egg powder , mayonnaiseand egg products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Egg products",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Gur / Jaggery",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Sugar & Sugar Product",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Tea",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Tea & Coffee",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Pickles, puree, chutney, culinary preparations",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title:
                  "Groundnut oil, sesame oil,coconut oil, palm oil, refined oil,cooking fat, spreading fat, butter, tallow, ghee, mustard oil, blended oils, seed oils",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title:
                  "Mo no s o dium glutamate, C alc ium C arb o nate, S o dium Bic arb o nate, P o ta s s ium Bromate, Dia c e tyl, SodiumBenzoate, Calciumpropionate, propionicacid, xanthun gum, bleaching powder, hexane, polyaluminiumchloride, solid alum,cationic softene, bleaching earth, so",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title:
                  "Caraway, Cardamom, Cinnamon, Cassia, Cumin, Fennel, Fenugreek, Ginger, Mace, Mustard,Nutmeg, Poppy, Aniseed &Ajowan",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title:
                  "Liquid Milk: Raw/Sterilized/Pas Flavored/Toned/Do Toned/Standardize Recombined/Cond Sweetened/Full cream/Skimmed/E Sweetened Condensed",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
            ],
          },
          {
            heading: "Marine/aquaculture products",
            subItems: [
              {
                title: "vik Meal",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Pet Foods",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
            ],
          },
        ],
      },
      {
        servTitle: "WATER",
        servItems: [
          {
            heading: "Residues & contaminants in water",
            subItems: [
              {
                title: "Groundnut Meal",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Pet Foods",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
            ],
          },
          {
            heading: "Water",
            subItems: [
              {
                title: "Groundnut Meal",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Pet Foods",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
            ],
          },
        ],
      },
      {
        servTitle: "Research and Development",
        servItems: [
          {
            heading: "Residues & contaminants in water",
            subItems: [
              {
                title: "Groundnut Meal",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Pet Foods",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
            ],
          },
          {
            heading: "Water",
            subItems: [
              {
                title: "Groundnut Meal",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
              {
                title: "Pet Foods",
                items: [
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                  { name: "Reasearch on Food", Certification: "IS 5402: 2012" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Training",
    itemKey: "training",
    path: "/services/training",
    des: "Lorem ipsum dolor sit amet consectetur. Ac orci urna mi proin at. Nunc urna tortor accumsan cum ut. Commodo ipsum viverra sed lorem bibendum.",
    ServiceData: [
      {
        servTitle: "Food Tests",
        servItems: [
          {
            heading: "Service train",
            subItems: [
              {
                title: "Category train",
                items: [
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Hygiene Monitoring Service",
    path: "/services/audit",
    itemKey: "audit",
    des: "Lorem ipsum dolor sit amet consectetur. Ac orci urna mi proin at. Nunc urna tortor accumsan cum ut. Commodo ipsum viverra sed lorem bibendum.",
    ServiceData: [
      {
        servTitle: "Food Tests",
        servItems: [
          {
            heading: "Service audit",
            subItems: [
              {
                title: "Catagory audit",
                items: [
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Consulting",
    itemKey: "consulting",
    path: "/services/consulting",
    des: "Lorem ipsum dolor sit amet consectetur. Ac orci urna mi proin at. Nunc urna tortor accumsan cum ut. Commodo ipsum viverra sed lorem bibendum.",
    ServiceData: [
      {
        servTitle: "Food Tests",
        servItems: [
          {
            heading: "service cons",
            subItems: [
              {
                title: "category cons",
                items: [
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                  {
                    name: "Total Plate Count",
                    Certification: "IS 5402: 2012",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function ServiceHero() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedHeading, setSelectedHeading] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [showitems, setShowItems] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const params = useParams();
  const uniqueKey = params.itemKey;
  const foundObject = AllServices.find(
    (eachObj) => eachObj.itemKey === uniqueKey
  );

  useEffect(() => {
    if (foundObject) {
      const initialOption = foundObject.ServiceData[0]?.servTitle || "";
      setSelectedOption(initialOption);
    }
  }, [foundObject]);

  useEffect(() => {
    if (foundObject) {
      const updatedServItem = foundObject.ServiceData.find(
        (eachObj) => eachObj.servTitle === selectedOption
      );
      if (updatedServItem) {
        const initialHeading = updatedServItem.servItems[0]?.heading || "";
        setSelectedHeading(initialHeading);
      }
    }
  }, [selectedOption, foundObject]);

  useEffect(() => {
    if (foundObject) {
      const updatedServItem = foundObject.ServiceData.find(
        (eachObj) => eachObj.servTitle === selectedOption
      );
      if (updatedServItem) {
        const updatedSubItem = updatedServItem.servItems.find(
          (eachObj) => eachObj.heading === selectedHeading
        );
        if (updatedSubItem) {
          const initialItem = updatedSubItem.subItems[0]?.title || "";
          setSelectedItem(initialItem);
        }
      }
    }
  }, [selectedHeading, selectedOption, foundObject]);

  const mainTitleHandler = (title) => {
    setSelectedOption(title);
  };

  const subTitleHandler = (title) => {
    setSelectedHeading(title);
  };

  const ListClickHandler = (title) => {
    setSelectedItem(title);
  };

  // Find current items based on selected state
  const foundServItem = foundObject?.ServiceData.find(
    (eachObj) => eachObj.servTitle === selectedOption
  );

  const foundSubItem = foundServItem?.servItems.find(
    (eachObj) => eachObj.heading === selectedHeading
  );

  const foundItemObj = foundSubItem?.subItems.find(
    (eachObj) => eachObj.title === selectedItem
  );

  const filterItems = (items, searchWord) => {
    if (!searchWord) return items; // If searchWord is empty, return all items
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchWord.toLowerCase())
    );
  };
  const filteredSearchItems = foundItemObj
    ? filterItems(foundItemObj.items, searchWord)
    : [];

  const dataObj = {
    service: selectedHeading,
    category: selectedItem,
  };

  return (
    <div>
      <div className="service-hero-section">
        <div className="service-hero-nav">
          <div>
            <div className="service-heading">{foundObject.title}</div>
            <p>{foundObject.des}</p>
          </div>
          <div className="service-nav-item-container pointer">
            {foundObject.ServiceData.length > 1 && (
              <>
                <div className="item-line-serperator" />
                {foundObject.ServiceData.map((eachItem, i) => (
                  <div key={i}>
                    <div
                      className={`${
                        selectedOption === eachItem.servTitle
                          ? "service-nav-item service-nav-item-active"
                          : "service-nav-item"
                      }`}
                      onClick={() => mainTitleHandler(eachItem.servTitle)}
                    >
                      {eachItem.servTitle}
                    </div>
                    {selectedOption === eachItem.servTitle && (
                      <div>
                        {eachItem.servItems.map((eachServ, i) => (
                          <div
                            key={i}
                            onClick={() => subTitleHandler(eachServ.heading)}
                            className={`${
                              selectedHeading === eachServ.heading
                                ? "service-nav-sub-item service-nav-sub-item-active"
                                : "service-nav-sub-item"
                            }`}
                            style={{ marginLeft: "1rem" }}
                          >
                            {eachServ.heading}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="item-line-serperator" />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="service-hero-sub-services">
          <div className="service-sub-services-search-container">
            <div>
              {foundObject.ServiceData.length > 1 && (
                <div
                  className="service-sub-service-heading pointer"
                  onClick={() => setShowItems(!showitems)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "1rem",
                  }}
                >
                  <span>{selectedItem ? selectedItem : ""}</span>
                  <span>{showitems ? <FaAngleUp /> : <FaAngleDown />}</span>
                </div>
              )}
            </div>

            <div className="service-input-btn-container">
              <div className="service-input-holder-style">
                <CiSearch style={{ marginRight: "0.5rem" }} />
                <input
                  type="text"
                  placeholder="Search"
                  style={{ height: "100%", border: "none", outline: "none" }}
                  onChange={(e) => setSearchWord(e.target.value)}
                />
              </div>
              <button
                className="service-enquire-btn pointer"
                onClick={() => {
                  navigate(`/contact`, {
                    state: dataObj,
                  });
                  window.scrollTo(0, 0);
                }}
              >
                Enquire Now
              </button>
            </div>
          </div>
          {showitems && (
            <div className="sub-service-titles-container">
              <div className="sub-service-titles-holder">
                {foundSubItem?.subItems?.map((eachTitle, i) => (
                  <div
                    key={i}
                    onClick={() => ListClickHandler(eachTitle.title)}
                  >
                    <div
                      className={
                        selectedItem === eachTitle.title
                          ? "sub-service-title sub-service-title-active"
                          : "sub-service-title"
                      }
                      onClick={() => setShowItems(false)}
                    >
                      {eachTitle.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div style={{ overflowY: "auto", maxHeight: "60vh" }}>
            {foundItemObj && (
              <div className="service-data-container">
                {filteredSearchItems?.map((eachService, i) => (
                  <div key={i}>
                    <motion.div
                      className="service-data-card"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          columnGap: "1.5rem",
                          minWidth: " 15rem",
                        }}
                      >
                        <div className="service-icon-container">
                          <img src={Testtube} alt="service icon" />
                        </div>
                        <div>
                          <div className="service-name">{eachService.name}</div>
                          <div className="service-certificate">
                            {eachService.Certification}
                          </div>
                        </div>
                      </div>
                      <div className="line-serperator" />
                    </motion.div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
