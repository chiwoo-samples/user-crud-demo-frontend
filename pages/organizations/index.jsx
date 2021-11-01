import {useEffect, useState} from 'react';
import { Link } from 'components';
import {organizationService} from 'services';

export default Index;


/*
조직 정보
    조직 명
    조직 영문 명
    조직 코드
    상위 조직 코드
    국가 코드
    주소 1
    주소 2
    생성 일시
    생성자 아이디
    수정 일시
    수정자 아이디
 */
function Index() {

    const [organizations, setOrganizations] = useState(null);

    useEffect(() => {
        organizationService.getAll().then(organizations => setOrganizations(organizations));
    }, []);

    console.log("organizations: " + organizations)
    console.log("setOrganizations: " + setOrganizations)

    return (
        <div>
            <h1>Organizations</h1>
            <Link href="/organizations/add" className="btn btn-sm btn-success mb-2">Add Organization</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '10%' }}>Code</th>
                        <th style={{ width: '25%' }}>Name</th>
                        <th style={{ width: '30%' }}>Eng Name</th>
                        <th style={{ width: '25%' }}>Parent Name</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {organizations && organizations.map(organization =>
                        <tr key={organization.id}>
                            <td>{organization.id}</td>
                            <td>{organization.name}</td>
                            <td>{organization.engName}</td>
                            <td>{organization.parentName}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link href={`/organizations/edit/${organization.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => deleteOrganization(organization.id)} className="btn btn-sm btn-danger btn-delete-user" disabled={organization.isDeleting}>
                                    {organization.isDeleting
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!organizations &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {organizations && !organizations.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}
