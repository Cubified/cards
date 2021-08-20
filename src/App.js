/*eslint no-restricted-globals: 0*/

import React from 'react';
import './App.css';
import {Flex, Box, Heading, Label, Select, Checkbox, Button} from 'theme-ui';
import CurrencyInput from 'react-currency-input-field';
import {formatValue} from 'react-currency-input-field';
import ReactTooltip from 'react-tooltip';
import cards from './cards';

class Card extends React.Component {
  determine_credit_range(val){
    if(val <= 580) return 'Poor/Limited History';
    if(val <= 670) return 'Fair';
    if(val <= 740) return 'Good';
    if(val <= 800) return 'Very Good';
    return 'Excellent';
  }
  render(){
    if(this.props.card === undefined) return (<div></div>);
    return (
      <div style={{display:this.props.visible?'block':'none'}}>
        <Flex style={{width:"100vw", flexWrap:"wrap", alignItems:"start", justifyContent:"center"}}>
          <Flex bg="primary" pl={3} color="white" style={{width:"100vw", height:"50px", alignItems:"center", justifyContent:"start"}}>
            <span style={{cursor:"pointer"}} onClick={this.props.hide}>&lt; Return</span>
          </Flex>
        </Flex>
        <Flex pt={4} style={{alignItems:"center", justifyContent:"center", flexWrap:"wrap", width:"100vw", textAlign:"center"}}>
          <div>
            <img alt={this.props.card['Name']} src={this.props.card['Image']} style={{boxShadow:"0 10px 20px rgba(0, 0, 0, 0.2)", width:"400px"}} />
            <br />
            <br />
            <Heading as="h3" style={{fontWeight:"100"}}>{ this.props.card['Issuer'] }</Heading>
            <Heading>{ this.props.card['Name'] }</Heading>
            <br />
            <Box p={4} style={{borderRadius:"10px", boxShadow:"0 10px 20px rgba(0, 0, 0, 0.2)"}}>
              <Flex style={{alignItems:"center"}}>
                <Box style={{textAlign:"left", width:"25%"}}>
                  <Heading>${ this.props.card['Fee'] }</Heading>
                  <Heading as="h5">Annual Fee</Heading>
                </Box>
                <Box style={{textAlign:"center", flexGrow:"1"}} data-tip={this.determine_credit_range(this.props.card['Credit'])}>
                  <Heading>{ this.props.card['Credit'] }</Heading>
                  <Heading as="h5">Min. Credit Score</Heading>
                </Box>
                <Box style={{textAlign:"right", width:"25%"}}>
                  <Heading>{ this.props.card['Type'] }</Heading>
                  <Heading as="h5">Type</Heading>
                </Box>
              </Flex>
              <br />
              <Flex>
                <Box style={{textAlign:"left", width:"25%"}} data-tip={'$'+this.props.options.dining + ' * ' + this.props.card['Dining'] + ' = $' + (parseInt(this.props.options.dining)*this.props.card['Dining']*this.props.card['Conversion']).toFixed(2)}>
                  <Heading>{ (this.props.card['Dining'] < 1) ? ((this.props.card['Dining']*100)+'%') : (this.props.card['Dining']+'x') }</Heading>
                  <Heading as="h5">Dining</Heading>
                </Box>
                <Box style={{textAlign:"center", flexGrow:"1"}} data-tip={'$'+this.props.options.gas + ' * ' + this.props.card['Gas'] + ' = $' + (parseInt(this.props.options.gas)*this.props.card['Gas']*this.props.card['Conversion']).toFixed(2)}>
                  <Heading>{ (this.props.card['Gas'] < 1) ? ((this.props.card['Gas']*100)+'%') : (this.props.card['Gas']+'x') }</Heading>
                  <Heading as="h5">Gas</Heading>
                </Box>
                <Box style={{textAlign:"right", width:"25%"}} data-tip={'$'+this.props.options.groceries + ' * ' + this.props.card['Groceries'] + ' = $' + (parseInt(this.props.options.groceries)*this.props.card['Groceries']*this.props.card['Conversion']).toFixed(2)}>
                  <Heading>{ (this.props.card['Groceries'] < 1) ? ((this.props.card['Groceries']*100)+'%') : (this.props.card['Groceries']+'x') }</Heading>
                  <Heading as="h5">Groceries</Heading>
                </Box>
              </Flex>
              <br />
              <Flex>
                <Box style={{textAlign:"left", width:"25%"}} data-tip={'$'+this.props.options.travel + ' * ' + this.props.card['Travel'] + ' = $' + (parseInt(this.props.options.travel)*this.props.card['Travel']*this.props.card['Conversion']).toFixed(2)}>
                  <Heading>{ (this.props.card['Travel'] < 1) ? ((this.props.card['Travel']*100)+'%') : (this.props.card['Travel']+'x') }</Heading>
                  <Heading as="h5">Travel</Heading>
                </Box>
                <Box style={{textAlign:"center", flexGrow:"1"}} data-tip={'$'+this.props.options.online + ' * ' + this.props.card['Online'] + ' = $' + (parseInt(this.props.options.online)*this.props.card['Online']*this.props.card['Conversion']).toFixed(2)}>
                  <Heading>{ (this.props.card['Online'] < 1) ? ((this.props.card['Online']*100)+'%') : (this.props.card['Online']+'x') }</Heading>
                  <Heading as="h5">Online</Heading>
                </Box>
                <Box style={{textAlign:"right", width:"25%"}} data-tip={'$'+this.props.options.other + ' * ' + this.props.card['All'] + ' = $' + (parseInt(this.props.options.other)*this.props.card['All']*this.props.card['Conversion']).toFixed(2)}>
                  <Heading>{ (this.props.card['All'] < 1) ? ((this.props.card['All']*100)+'%') : (this.props.card['All']+'x') }</Heading>
                  <Heading as="h5">Other</Heading>
                </Box>
              </Flex>
              <ReactTooltip place="top" type="dark" effect="solid" />
              <br />
              <Flex>
                <Box style={{textAlign:"left", width:"25%"}}>
                  <Heading>{ this.props.card['TSA'] }</Heading>
                  <Heading as="h5">TSA PreCheck Credit</Heading>
                </Box>
                <Box style={{textAlign:"center", flexGrow:"1"}}>
                  <Heading>{ this.props.card['Insurance'] }</Heading>
                  <Heading as="h5">Travel Insurance</Heading>
                </Box>
                <Box style={{textAlign:"right", width:"25%"}}>
                  <Heading>{ this.props.card['Builder'] }</Heading>
                  <Heading as="h5">Credit builder card</Heading>
                </Box>
              </Flex>
              <br />
              <hr />
              <br />
              <Box style={{textAlign:"center"}}>
                <Heading style={{fontSize:"24pt"}}>{formatValue({value:this.props.roi.toFixed(2), prefix:'$', decimalScale:2})}</Heading>
                <Heading as="h5">Est. annual return</Heading>
              </Box>
              { (this.props.card['Notes'].trim() !== '') ? 
                (<div><br />
                  <Box style={{textAlign:"center"}}>
                    <Heading as="h3" style={{fontWeight:"100", marginBottom:"2px"}}>{ this.props.card['Notes'] }</Heading>
                    <Heading as="h5">Notes</Heading>
                  </Box></div>) :
                (<div></div>)
              }
              <br />
              <a href={this.props.card['Link']}>
                <Button style={{cursor:"pointer"}}>Learn more</Button>
              </a>
            </Box>
          </div>
        </Flex>
        <br />
      </div>
    );
  }
}

class Results extends React.Component {
  roi(card){
    let roi = (
      parseInt(this.props.options.dining)    * card['Dining']    +
      parseInt(this.props.options.gas)       * card['Gas']       +
      parseInt(this.props.options.groceries) * card['Groceries'] +
      parseInt(this.props.options.travel)    * card['Travel']    +
      parseInt(this.props.options.online)    * card['Online']    +
      parseInt(this.props.options.other)     * card['All']
    );
    return (roi * card['Conversion'] * this.props.options.spend) - card['Fee'];
  }
  compute(){
    let presort = [];
    cards.forEach((card)=>{
      if((this.props.options.type === 'All' ? true : (card['Type'] === this.props.options.type)) &&
         parseInt(this.props.options.credit) >= card['Credit'] &&
         (this.props.options.fee ? (card['Fee'] === 0) : true) &&
         (this.props.options.tsa ? (card['TSA'] === 'Yes') : true) &&
         (this.props.options.insurance ? (card['Insurance'] === 'Yes') : true) &&
         (this.props.options.custom ? (card['Rotating/Custom'] === 'Yes') : true) &&
         (this.props.options.builder ? (card['Builder'] === 'Yes') : true)){
        if(presort[0] === undefined) presort[0] = [card];
        else presort[0].push(card);
      }
    });

    if(presort.length === 0){
      return (
        <Box p={2} style={{fontWeight:'bold', textAlign:'center'}}>No matches found, try adjusting your criteria.</Box>
      );
    }

    let out = [];
    for(let ind=presort.length-1;ind>=0;ind--){
      if(presort[ind] !== undefined && presort[ind].length > 0){
        presort[ind].sort((a, b)=>{
          let roia = this.roi(a),
              roib = this.roi(b);
          return (roib - roia);
        });
        presort[ind].forEach((card, cidx)=>{
          let roi = this.roi(card);
          if(roi < 0 && !this.props.options.negative) return;
          out.push((
            <Flex key={card['Name']} p={4} m={4} className="cardListing" onClick={()=>{this.props.view_listing(card, roi)}}>
              <Flex className="cardListing-Container">
                <img alt={card['Name']} src={card['Image']} className="cardListing-Image" />
                <Box pl={4} className="cardListing-Name">
                  <Heading as="h3">{card['Issuer']}</Heading>
                  <Heading>{card['Name']}</Heading>
                </Box>
              </Flex>
              <Box mt={2} className="cardListing-ROI">
                <Heading>{formatValue({value:roi.toFixed(2), prefix:'$', decimalScale:2})}</Heading>
                <Heading as="h5">Est. annual return</Heading>
              </Box>
            </Flex>
          ));
        });
      }
    }
    return out;
  }
  render(){
    return (
      <div style={{display:this.props.visible?'block':'none'}}>
        <Flex style={{width:"100vw", flexWrap:"wrap", alignItems:"start", justifyContent:"center"}}>
          <Flex bg="primary" pl={3} color="white" style={{width:"100vw", height:"50px", alignItems:"center", justifyContent:"start"}}>
            <span style={{cursor:"pointer"}} onClick={this.props.hide}>&lt; Return</span>
          </Flex>
        </Flex>
        <Box key="heading" p={2} style={{fontWeight:'bold', textAlign:"center"}}>Cards that matched your criteria:</Box>
        <Flex style={{alignItems:"center", justifyContent:"center", flexWrap:"wrap"}}>
          { this.compute() }
        </Flex>
      </div>
    );
  }
};

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: 2,
      card: cards[0],
      roi: 0,

      type: 'All',
      credit: 800,
      fee: false,
      tsa: false,
      insurance: false,
      custom: false,
      builder: false,
      negative: false,

      spend: 12,
      dining: 100,
      gas: 100,
      groceries: 100,
      travel: 100,
      online: 100,
      other: 100,

      keypress: true
    };
    this.set_view = this.set_view.bind(this);
    this.update_value_if_mobile = this.update_value_if_mobile.bind(this);
    location.hash = 0;
    window.onhashchange = ()=>{
      this.setState({
        view: parseInt(location.hash.substring(1))
      });
    };
  }
  set_view(view, card, roi){
    this.setState({
      view,
      card,
      roi
    });
    window.scrollTo(0, 0);
    location.hash = view;
  }
  update_value_if_mobile(e){
    /* Hacky and bad, but it's the best that can be done given React breaking
     *   <input type="number" /> on mobile
     */
    if(/Android|iPhone|iPad/i.test(navigator.userAgent) && this.state.keypress){
      if(e.key === 'Backspace'){
        e.target.value = e.target.value.substring(0, e.target.value.length-1);
      } else if(!isNaN(parseInt(e.key))){
        e.target.value += e.key;
      }
      this.setState({
        keypress: false
      });
      setTimeout(()=>{
        this.setState({
          keypress: true
        });
      }, 100);
    }
  }
  render(){
    return (
      <div className="App">
        <Flex style={{width:"100vw", height:"10vh", flexWrap:"wrap", alignItems:"start", justifyContent:"center"}}>
          <Flex bg="highlight" pl={3} color="black" style={{width:"100vw", height:"10vh", alignItems:"center", justifyContent:"center"}}>
            <Heading style={{fontWeight:"100"}}>Credit Card Finder</Heading>
          </Flex>
        </Flex>
        <Flex style={{width:"100vw", height:"90vh", flexWrap:"wrap", display:this.state.view===0?'flex':'none'}}>
          <Box p={4} color="white" bg="primary" className="optionsBox">
            <Label variant="primary">I'm looking for:</Label>
            <Select arrow={
              <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                sx={{
                  ml: -28,
                  alignSelf: 'center',
                  pointerEvents: 'none',
                }}>
                <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
              </Box>
            } color="black" value={this.state.type} onChange={(e)=>{this.setState({type:e.target.value});}}>
              <option value="All">All cards</option>
              <option value="Travel">Travel cards</option>
              <option value="Cash back">Cash back cards</option>
            </Select>
            <br />
            <Label variant="primary">With credit range:</Label>
            <Select arrow={
              <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                sx={{
                  ml: -28,
                  alignSelf: 'center',
                  pointerEvents: 'none',
                }}>
                <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
              </Box>
            } color="black" value={this.state.credit} onChange={(e)=>{this.setState({credit:e.target.value});}}>
              <option value={800}>Excellent (800-850)</option>
              <option value={740}>Very good (740-800)</option>
              <option value={670}>Good (670-740)</option>
              <option value={580}>Fair (580-670)</option>
              <option value={300}>Poor (300-580)</option>
            </Select>
            <br />
            <Label variant="primary">And features:</Label>
            <Label>
              <Checkbox checked={this.state.fee} onChange={(e)=>{this.setState({fee:e.target.checked});}}/>
              No annual fee
            </Label>
            <Label>
              <Checkbox checked={this.state.tsa} onChange={(e)=>{this.setState({tsa:e.target.checked});}}/>
              TSA PreCheck credit
            </Label>
            <Label>
              <Checkbox checked={this.state.insurance} onChange={(e)=>{this.setState({insurance:e.target.checked});}}/>
              Provides travel insurance
            </Label>
            <Label>
              <Checkbox checked={this.state.custom} onChange={(e)=>{this.setState({custom:e.target.checked});}}/>
              Rotating/custom reward amounts
            </Label>
            <Label>
              <Checkbox checked={this.state.builder} onChange={(e)=>{this.setState({builder:e.target.checked});}}/>
              Designed to build credit
            </Label>
            <br />
            <Label variant="primary">Other options:</Label>
            <Label>
              <Checkbox checked={this.state.negative} onChange={(e)=>{this.setState({negative:e.target.checked});}}/>
              Include cards with negative estimated returns
            </Label>
          </Box>
          <Box p={4} color="white" bg="secondary" className="optionsBox">
            <Label variant="primary">And with:</Label>
            <Select arrow={
              <Box
                as="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                sx={{
                  ml: -28,
                  alignSelf: 'center',
                  pointerEvents: 'none',
                }}>
                <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
              </Box>
            } color="black" onChange={(e)=>{this.setState({spend:e.target.value});}}>
              <option value={12}>Monthly spend</option>
              <option value={1}>Annual spend</option>
            </Select>
            <br />
            <Label variant="primary">On dining:</Label>
            <CurrencyInput className="spend-Input" id="dining" name="dining" defaultValue={100} prefix="$" allowNegativeValue={false} allowDecimals={false} onKeyDown={this.update_value_if_mobile} onValueChange={(dining)=>{if(dining===undefined){this.setState({dining:0});} else this.setState({dining});}} />
            <Label variant="primary">On gas:</Label>
            <CurrencyInput className="spend-Input" id="gas" name="gas" defaultValue={100} prefix="$" allowNegativeValue={false} allowDecimals={false} onKeyDown={this.update_value_if_mobile} onValueChange={(gas)=>{if(gas===undefined){this.setState({gas:0});} else this.setState({gas});}} />
            <Label variant="primary">On groceries:</Label>
            <CurrencyInput className="spend-Input" id="groceries" name="groceries" defaultValue={100} prefix="$" allowNegativeValue={false} allowDecimals={false} onKeyDown={this.update_value_if_mobile} onValueChange={(groceries)=>{if(groceries===undefined){this.setState({groceries:0});} else this.setState({groceries});}} />
            <Label variant="primary">On travel:</Label>
            <CurrencyInput className="spend-Input" id="travel" name="travel" defaultValue={100} prefix="$" allowNegativeValue={false} allowDecimals={false} onKeyDown={this.update_value_if_mobile} onValueChange={(travel)=>{if(travel===undefined){this.setState({travel:0});} else this.setState({travel});}} />
            <Label variant="primary">On online shopping:</Label>
            <CurrencyInput className="spend-Input" id="online" name="online" defaultValue={100} prefix="$" allowNegativeValue={false} allowDecimals={false} onKeyDown={this.update_value_if_mobile} onValueChange={(online)=>{if(online===undefined){this.setState({online:0});} else this.setState({online});}} />
            <Label variant="primary">On other:</Label>
            <CurrencyInput className="spend-Input" id="other" name="other" defaultValue={100} prefix="$" allowNegativeValue={false} allowDecimals={false} onKeyDown={this.update_value_if_mobile} onValueChange={(other)=>{if(other===undefined){this.setState({other:0});} else this.setState({other});}} />
          </Box>
          <Flex p={4} bg="highlight" style={{width:"100%", alignItems:"center", justifyContent:"center", textAlign:"center", color:"black", fontWeight:"bold"}}>
            <Button style={{cursor:"pointer"}} onClick={()=>{this.set_view(1)}}>Go</Button>
          </Flex>
        </Flex>
        <Results visible={this.state.view===1} hide={()=>{this.set_view(0)}} view_listing={(card, roi)=>{this.set_view(2, card, roi)}} options={this.state} />
        <Card visible={this.state.view===2} hide={()=>{this.set_view(1)}} card={this.state.card} roi={this.state.roi} options={this.state} />
      </div>
    );
  }
}
