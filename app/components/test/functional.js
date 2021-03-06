import React from 'react';
import is from 'prop-types'
import { BrowserHistory } from 'react-router-dom';

import Tabs from '../common/tabs';
import * as api from '../../actions/api'


Functional.propTypes = {
	asyncGetPosts: is.func
}

function Functional (props) {

  const click = async () => {
    console.log(await api.asyncGetPosts())
	}

  const click2 = async () => {
    console.log(await api.asyncNewPost({
      title: 'knovigator is a platform for peer to peer learning',
      author: 'metamitya',
      body: "a chrome extension for importing search sessions into knovigator threads",
      parent: '',
    }))
  }

	function navigate () {
		props.history.push('/stateful')
	}

	return (
		<div className={''}>
			<h1>I am a functional Component</h1>
			<button onClick={click}>Test Button</button>
			<br/><br/>

      <button onClick={click2}>Test Button 2</button>
      <br/><br/>

			<button onClick={navigate}>Navigate</button>
			<br/><br/><br/>

			<Tabs activeTab='1' tabs={tabs} >
				{childrenArray}
			</Tabs>
		</div>
	)
}

export default Functional;


function Tab (props) {
	console.log('tab is rendering');
	return (
		<h1>{props.label}?</h1>
	)
}

//Need to define these to pass to Tabs to avoid re-rendering;

const tabs = ['Login', 'Sign Up'];
const childrenArray = [Tab, Tab];

