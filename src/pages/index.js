import * as React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import Slide from "../components/slide"

const IndexPage = () => (
  <Layout>
    <Container>
      <h1>About the BORDERSCAPE Project WebGIS</h1>

      <Slide />

      <p>
        The BORDERSCAPE WebGIS databases and web app are outcomes of the{" "}
        <a href="https://borderscapeproject.iksio.pan.pl/">
          BORDERSCAPE Project - Egyptian State Formation and the Changing
          Socio-Spatial Landscape of the Nile First Cataract Region in the 4th
          and 3rd millennia BCE
        </a>
        . The research leading to these outcomes received funding from the
        Norwegian Financial Mechanism 2014-2021 through the{" "}
        <a href="https://eeagrants.org/countries/poland">Norway Grants</a> and
        the{" "}
        <a href="https://www.ncn.gov.pl/en">
          National Science Centre of Poland
        </a>{" "}
        (grant no. POLS 2020/37/K/HS3/04097). The project is hosted by the{" "}
        <a href="http://www.iksiopan.pl/index.php/pl/">
          Institute of Mediterranean and Oriental Cultures, Polish Academy of
          Sciences, Warsaw
        </a>
        .
      </p>

      <p>
        The aims of the BORDERSCAPE Project are to detect the timing and nature
        of changes in settlement pattern, land use and community structure at
        the ancient Egyptian southern border during the state formation period;
        identify what power performances were set in place by the bordering
        process; explore how the processes of state formation and border-making
        impacted and transformed Egypt’s southern neighbor, Nubia. These
        questions are explored as part of the interpretative synthesis presented
        in Gatto, forthcoming.
      </p>

      <p>
        To provide an overview of changes in the settlement pattern, a dataset
        including 163 archaeological sites dated from c. 3800 to 2300 BCE was
        collected. The sites are located in the segment of the Nile Valley
        comprised between the Kom Ombo Plain and the Bab el-Kalabsha and the
        nearby desert areas of Kurkur Oasis, Wadi el-Lawi/Wadi Rasras, Wadi Abu
        Subeira, and Wadi el-Hudi. Half of the sites, 82 in total, were
        discovered by the{" "}
        <a href="https://www.akapegypt.org/">
          Aswan-Kom Ombo Archaeological Project – AKAP
        </a>{" "}
        and are mostly unpublished.
      </p>

      <p>
        The dataset is presented in total and as divided into six chronological
        phases, three before and three after the Egyptian state unification date
        of 3085 BCE:
        <ol>
          <li>3800-3500 BCE, Naqada IC-IIB;</li>
          <li>3500-3300 BCE, Naqada IICD;</li>
          <li>3300-3100 BCE, Naqada III/Dyn. 0;</li>
          <li>3100-2650 BCE, Dyn. 1-2;</li>
          <li>2650-2500 BCE, Dyn. 3-4;</li>
          <li>2500-2300 BCE, Dyn. 5-6.</li>
        </ol>
      </p>

      <p>
        Archaeological and historical inundation models are described in Gatto
        and Siegel, forthcoming, with the database of the historical inundations
        supplied here too. They are produced with the TerraSAR-X/TanDEM-X
        Digital Elevation Model, kindly provided by the{" "}
        <a href="https://www.dlr.de/en">German Aerospace Agency</a> (© DLR
        2022). Legacy archaeological sites are positioned using historical
        topographical data based on The Survey of Egypt maps dated between 1907
        and 1934, retrieved from Reisner 1910, Curto et al. 1987, and the{" "}
        <a href="https://isac.uchicago.edu/research/camel">
          CAMEL Lab of the University of Chicago
        </a>
        . Historical CORONA satellite images are also retrieved from the CAMEL
        Lab of the University of Chicago.
      </p>

      <p>
        The dataset behing this portal is published on Zenodo: <br />
        Siegel, Oren, Julian Bogdani, Alberto Urcia, Serena Nicolini, and Maria
        Carmela Gatto. ‘The BORDERSCAPE Project Webgis Repository’. Zenodo,
        2024.{" "}
        <a
          href="https://doi.org/10.5281/zenodo.10775678"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://doi.org/10.5281/zenodo.10775678
        </a>
        .
      </p>

      <h3>Bibliography</h3>
      <ul>
        <li>
          Curto S., Maragioglio, V. and C. Rinaldi 1987.{" "}
          <em>Korosko–Kasr Ibrim. Incisioni Rupestri Nubiane</em>. Cisalpino
          Goliardica, Milano.
        </li>
        <li>
          Gatto, M.C. forthcoming.{" "}
          <em>
            BORDERSCAPE – Egyptian State Formation and the Changing
            Socio-Spatial Landscape of the Nile First Cataract Region in the 4th
            and 3rd millennia BCE
          </em>
          . Travaux de l'Institut des Cultures Méditerranéennes et Orientales de
          l'Académie Polonaise des Sciences, IKŚiO PAN/HARRASSOWITZ VERLAG.
        </li>
        <li>
          Gatto, M.C. and O. Siegel forthcoming.{" "}
          <em>
            Combining Geo-Archaeology and Historical Nile Records to Understand
            Predynastic Settlement Patterns in the region of the Nile’s First
            Cataract, Egypt
          </em>
          . Open Archaeology.
        </li>
        <li>
          Reisner, G.A. 1910.{" "}
          <em>The Archaeological Survey of Nubia. Report for 1907–1908</em>, 2
          vols. National Printing Department, Cairo.
        </li>
        <li>
          Siegel, O., Bogdani, J., Urcia, A., and M.C. Gatto forthcoming.{" "}
          <em>
            The BORDERSCAPE Project WebGIS: State Formation and Settlement
            Patterns in the Ancient Egyptian Southern Border
          </em>
          . Journal of Open Archaeological Data.
        </li>
      </ul>
    </Container>
  </Layout>
)

export default IndexPage
