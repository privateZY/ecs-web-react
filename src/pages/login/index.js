import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PageLoadable from "../../components/PageLoadable";

export default PageLoadable({
    loader: () => import(/* webpackChunkName: "login" */ "./Login.js")
});
