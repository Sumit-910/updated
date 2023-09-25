import './testres.scss';

const Testres = () => {
  return (
    <>
      <div className="testres">
        <div className="theading">Provide the test scores in the form of excel file</div>
        <form className='efo' >
            <div className="efile">
                <label htmlFor="ef">Choose the File</label>
                <input type="file" required name="ef" id="ef" />
            </div>
            <div className="sbtn">
                <button className='sb' >Submit</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Testres
