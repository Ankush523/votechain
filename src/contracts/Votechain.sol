//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract Vote{

    uint uid;
    uint cid;

    struct User{
        uint uid;
        string name;
        uint age;
        string contactnumber;
        string sex;
        address user;
    }

    struct Candidate{
        uint cid;
        string name;
        string party_name;
        uint age;
        string region;
        address Candidate;
    }

    mapping(address => mapping(uint => User)) voter;
    mapping(address => mapping(uint => Candidate)) candidate;
    mapping(uint => Candidate) candidate_list;

    function receiveUid() external view returns(uint) {
        return uid;
    }

    function receiveCid() external view returns(uint) {
        return cid;
    }

    function userregister(string memory _name,uint _age,string memory _contactnumber,string memory _sex) external{
        ++uid;
        voter[msg.sender][uid] = User(uid,_name,_age,_contactnumber,_sex,msg.sender);
    }

    function candidateregister(string memory _name, string memory _party_name,uint _age,string memory _region) external{
        ++cid;
        candidate[msg.sender][cid] = Candidate(cid,_name,_party_name,_age,_region,msg.sender);
        candidate_list[cid] = Candidate(cid,_name,_party_name,_age,_region,msg.sender);
    }
}