export default(req, res) => {
    console.log("pages/api/organizations/index")
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
/*

    조직 코드
    조직 명
    조직 영문 명
    상위 조직 코드
    국가 코드
    주소 1
    주소 2
    생성 일시
    생성자 아이디
    수정 일시
    수정자 아이디
 */
    res.end(JSON.stringify([
        {
            id: 98173,
            name: "Name",
            engName: "Eng Name",
            parentId: 98100,
            parentName: "Parent Name",
            countryCode: "KR",
            address1: "Seoul",
            address2: "Sechogu",
            created: null,
            updated: null
        }
    ]))
}