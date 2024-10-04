import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={"Shiraz Weather "} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
      <br-xxx/>
      <div style={{width:"100%", height:45, backgroundColor:"#CEC5E2", textAlign:"center"}}>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>


        <span>
          FeelslikeC : {props.feelslikec}° C
        </span>

      </div>

      <br-xxx/>
      <div style={{width:"100%", height:45, backgroundColor:"#CEC5E2", textAlign:"center"}}>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>


        <span>
          FeelslikeF : {props.feelslikef}° F
        </span>

      </div>

      <br-xxx/>
      <div style={{width:"100%", height:45, backgroundColor:"#CEC5E2", textAlign:"center"}}>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>


        <span>
        Cloudcover : {props.cloudcover}
        </span>

      </div>

      <br-xxx/>
      <div style={{width:"100%", height:45, backgroundColor:"#CEC5E2", textAlign:"center"}}>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>


        <span>
        Cloudcover : {props.humidity}
        </span>

      </div>

      <br-xxx/>
      <div style={{width:"100%", height:45, backgroundColor:"#CEC5E2", textAlign:"center"}}>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>
      <br-xxx/>


        <span>
        uvIndex : {props.uvIndex}
        </span>

      </div>
      
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let json = await (await fetch("https://cdn.ituring.ir/research/api/weather/")).json()

    let feelslikec = json.current_condition[0].FeelsLikeC
    let feelslikef = json.current_condition[0].FeelsLikeF
    let cloudcover = json.current_condition[0].cloudcover
    let humidity = json.current_condition[0].humidity
    let uvIndex = json.current_condition[0].uvIndex

  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelslikec,
        feelslikef,
        cloudcover,
        humidity,
        uvIndex,
        // nlangs,
      })
    },
  }
}